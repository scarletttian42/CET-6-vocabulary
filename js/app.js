// ===== 公共逻辑：本地存储 / 词库 / 工具函数 =====

var Store = {
  KEYS: { stats: 'vq_stats', mistakes: 'vq_mistakes', history: 'vq_history' },

  load: function (key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) { return fallback; }
  },
  save: function (key, val) { localStorage.setItem(key, JSON.stringify(val)); },

  // —— 每词学习记录 ——
  getStats: function () { return this.load(this.KEYS.stats, {}); },
  recordAnswer: function (word, isCorrect) {
    var s = this.getStats();
    if (!s[word]) s[word] = { seen: 0, correct: 0, wrong: 0 };
    s[word].seen += 1;
    if (isCorrect) s[word].correct += 1; else s[word].wrong += 1;
    this.save(this.KEYS.stats, s);
  },

  // —— 错题本 ——
  getMistakes: function () { return this.load(this.KEYS.mistakes, []); },
  addMistake: function (word, reason) {
    var list = this.getMistakes();
    if (!list.some(function (m) { return m.word === word; })) {
      list.push({ word: word, reason: reason, time: Date.now() });
      this.save(this.KEYS.mistakes, list);
    }
  },
  removeMistake: function (word) {
    var list = this.getMistakes().filter(function (m) { return m.word !== word; });
    this.save(this.KEYS.mistakes, list);
  },

  // —— 历史记录 ——
  getHistory: function () { return this.load(this.KEYS.history, []); },
  addHistory: function (rec) {
    var h = this.getHistory();
    h.push(rec);
    this.save(this.KEYS.history, h);
  },

  clearAll: function () {
    localStorage.removeItem(this.KEYS.stats);
    localStorage.removeItem(this.KEYS.mistakes);
    localStorage.removeItem(this.KEYS.history);
  }
};

// ===== 词库 =====
var POS_BASE = ['v.', 'n.', 'adv.', 'adj.', 'pron.'];

// 去重后的全量词库（按单词去重，后出现的覆盖先出现的）
function getAllWords() {
  var map = {};
  (typeof WORDS !== 'undefined' ? WORDS : []).forEach(function (w) {
    if (!w || !w.word) return;
    var key = String(w.word).trim().toLowerCase();
    map[key] = {
      word: String(w.word).trim(),
      pos: (w.pos || []).map(function (p) { return String(p).trim(); }).filter(Boolean),
      meaning: String(w.meaning || '').trim()
    };
  });
  return Object.keys(map).map(function (k) { return map[k]; });
}

// 词库中实际出现的全部词性（固定5种 + 动态补充）
function getAllPosValues(words) {
  var set = POS_BASE.slice();
  words.forEach(function (w) {
    w.pos.forEach(function (p) { if (set.indexOf(p) === -1) set.push(p); });
  });
  return set;
}

function getWord(word) {
  var hit = null;
  getAllWords().forEach(function (w) {
    if (w.word.toLowerCase() === word.toLowerCase()) hit = w;
  });
  return hit;
}

// ===== 工具函数 =====
function shuffle(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

function normalize(s) {
  return String(s || '').trim().toLowerCase().replace(/\s+/g, ' ');
}

function escapeHtml(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function posTagsHtml(posList) {
  return posList.map(function (p) {
    return '<span class="tag">' + escapeHtml(p) + '</span>';
  }).join(' ');
}

function fmtDateTime(ts) {
  var d = new Date(ts);
  function p(n) { return n < 10 ? '0' + n : n; }
  return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate()) +
    ' ' + p(d.getHours()) + ':' + p(d.getMinutes());
}

function showToast(msg) {
  var el = document.getElementById('toast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'toast';
    el.className = 'toast';
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(function () { el.classList.remove('show'); }, 1800);
}

// 页面导航高亮
function markActiveNav() {
  var page = document.body.getAttribute('data-page');
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    if (a.getAttribute('data-nav') === page) a.classList.add('active');
  });
}

var REASON_LABEL = { spell: '拼写错误', pos: '词性选择错误', manual: '手动标记' };
var MODE_LABEL = { spell: '拼写模式', pos: '词性自测' };

// 顶栏状态胶囊：进度（已练词数/总词数）与错题数
function renderTopbarPills() {
  var stats = Store.getStats();
  var learned = 0;
  Object.keys(stats).forEach(function (w) {
    if (stats[w].seen > 0 && getWord(w)) learned += 1;
  });
  var p = document.getElementById('pill-progress');
  var m = document.getElementById('pill-mistakes');
  if (p) p.textContent = learned + '/' + getAllWords().length;
  if (m) m.textContent = String(Store.getMistakes().length);
}
