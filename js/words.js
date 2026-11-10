// 两个词库分别对应两个刷题模式：
//   WORDS       → 词性自测模式（看单词选词性）
//   WORDS_SPELL → 拼写模式（看中文输入英文）
// 加新词：照下面格式复制一行，改好单词/词性/释义，保存后推送到 GitHub 即可。
// 词性可选值：v. n. adv. adj. pron.（一词多性写多个，如 "v.", "n."）
const WORDS = [
  { "word": "initiative", "pos": ["n."], "meaning": "倡议" },
  { "word": "speculate", "pos": ["v."], "meaning": "推测，猜测" },
  { "word": "reproach", "pos": ["v.", "n."], "meaning": "指责，责备" },
  { "word": "endeavor", "pos": ["n.", "v."], "meaning": "努力，尽力" },
  { "word": "recreation", "pos": ["n."], "meaning": "娱乐；重建，重现" },
  { "word": "lawn", "pos": ["n."], "meaning": "草坪" },
  { "word": "exaggerate", "pos": ["v."], "meaning": "夸大，夸张" },
  { "word": "alleviate", "pos": ["v."], "meaning": "减轻，缓解" },
  { "word": "bark", "pos": ["n.", "v."], "meaning": "树皮；狗叫" },
  { "word": "proficiency", "pos": ["n."], "meaning": "熟练，精通" },
  { "word": "periodic", "pos": ["adj."], "meaning": "定期的；周期的" },
  { "word": "drastic", "pos": ["adj."], "meaning": "极端的；激烈的" },
  { "word": "indignant", "pos": ["adj."], "meaning": "愤慨的；气愤的" },
  { "word": "puppet", "pos": ["n."], "meaning": "木偶；玩偶" },
  { "word": "brace", "pos": ["n.", "v."], "meaning": "支柱；支撑" },
  { "word": "intrigue", "pos": ["n.", "v."], "meaning": "引起极大兴趣；欺骗；阴谋，诡计" },
  { "word": "resign", "pos": ["v."], "meaning": "辞职" },
  { "word": "sarcastic", "pos": ["adj."], "meaning": "讽刺的，冷嘲热讽的" },
  { "word": "surgeon", "pos": ["n."], "meaning": "外科医生" },
  { "word": "moderate", "pos": ["adj."], "meaning": "温和的；有节制的" },
  { "word": "denote", "pos": ["v."], "meaning": "意思是；意指" },
  { "word": "aggravate", "pos": ["v."], "meaning": "使严重；激怒" },
  { "word": "drift", "pos": ["n."], "meaning": "漂流；主旨；趋势" },
  { "word": "degenerate", "pos": ["v."], "meaning": "恶化，堕落（的/者）" },
  { "word": "merge", "pos": ["v."], "meaning": "结合，合并，相融" },
  { "word": "detrimental", "pos": ["adj.", "n."], "meaning": "有害的（人）" },
  { "word": "symptom", "pos": ["n."], "meaning": "症状；征兆" },
  { "word": "bitter", "pos": ["adj."], "meaning": "苦的；激烈的" },
  { "word": "unveil", "pos": ["v."], "meaning": "揭露" },
  { "word": "perpetuate", "pos": ["v."], "meaning": "使永存；保持" },
  { "word": "transparency", "pos": ["n."], "meaning": "透明" },
  { "word": "explicit", "pos": ["adj."], "meaning": "明确的；坦率的" },
  { "word": "consent", "pos": ["n.", "v."], "meaning": "允许，同意" },
  { "word": "default", "pos": ["n.", "v."], "meaning": "违约，拖欠" },
  { "word": "integrate", "pos": ["v."], "meaning": "加入，融入；成为一体" },
  { "word": "vacuum", "pos": ["n.", "v."], "meaning": "吸尘（器）；清扫" },
  { "word": "briefing", "pos": ["n."], "meaning": "简报" },
  { "word": "revenue", "pos": ["n."], "meaning": "收入；收益" },
  { "word": "prompt", "pos": ["adj.", "n.", "v."], "meaning": "敏捷的，迅速的；提示，催促；促使" },
  { "word": "engagement", "pos": ["n."], "meaning": "参与（度）；婚约" },
  { "word": "align", "pos": ["v."], "meaning": "符合；有助于（+with）" },
  { "word": "comply", "pos": ["v."], "meaning": "遵从" },
  { "word": "lucrative", "pos": ["adj."], "meaning": "获利多的" },
  { "word": "utilize", "pos": ["v."], "meaning": "利用，使用" },
  { "word": "crawl", "pos": ["v."], "meaning": "爬行" },
  { "word": "dip", "pos": ["v.", "n."], "meaning": "蘸；下降" },
  { "word": "layman", "pos": ["n."], "meaning": "门外汉" },
  { "word": "tilt", "pos": ["v."], "meaning": "倾斜" },
  { "word": "vacant", "pos": ["adj."], "meaning": "空缺的" },
  { "word": "pitch", "pos": ["v.", "n."], "meaning": "投掷；音高；强度" },
  { "word": "resort", "pos": ["n.", "v."], "meaning": "度假胜地；诉诸，采用（+to）" },
  { "word": "dub", "pos": ["v."], "meaning": "授予（称号）；配音" },
  { "word": "spur", "pos": ["v."], "meaning": "激励，鞭策；推动" },
  { "word": "summit", "pos": ["n."], "meaning": "山顶" },
  { "word": "fist", "pos": ["n."], "meaning": "拳头" },
  { "word": "sprawl", "pos": ["v."], "meaning": "蔓生" },
  { "word": "navigable", "pos": ["adj."], "meaning": "可通航的" },
  { "word": "stubborn", "pos": ["adj."], "meaning": "难对付的" },
  { "word": "column", "pos": ["n."], "meaning": "栏；支柱" },
  { "word": "tide", "pos": ["n."], "meaning": "潮汐" },
  { "word": "erect", "pos": ["v."], "meaning": "建造" },
  { "word": "scrutiny", "pos": ["n."], "meaning": "仔细检查" },
  { "word": "aesthetic", "pos": ["n.", "adj."], "meaning": "审美（的）" },
  { "word": "manifest", "pos": ["v."], "meaning": "出现，明晰，表明" },
  { "word": "intimidate", "pos": ["v."], "meaning": "恐吓，威胁" },
  { "word": "gloomy", "pos": ["adj."], "meaning": "愁容满面的；阴暗的" },
  { "word": "essence", "pos": ["n."], "meaning": "本质，实质（in~）" },
  { "word": "cue", "pos": ["n.", "v."], "meaning": "提示；暗示；信号；给...提示" },
  { "word": "supplementary", "pos": ["adj.", "n."], "meaning": "补充（的）；附加（的）" },
  { "word": "decent", "pos": ["adj."], "meaning": "正派的；体面的" },
  { "word": "compel", "pos": ["v."], "meaning": "强迫；不得已" },
  { "word": "notable", "pos": ["adj."], "meaning": "显著的" },
  { "word": "prescribe", "pos": ["v."], "meaning": "给...开药；命令" },
  { "word": "lucid", "pos": ["adj."], "meaning": "易懂的" },
  { "word": "mansion", "pos": ["n."], "meaning": "公馆" },
  { "word": "cement", "pos": ["n."], "meaning": "水泥" },
  { "word": "specimen", "pos": ["n."], "meaning": "标本" },
  { "word": "coordinate", "pos": ["v.", "n."], "meaning": "使一致，调整；坐标" },
  { "word": "evaporate", "pos": ["v."], "meaning": "蒸发；消失" },
  { "word": "redeem", "pos": ["v."], "meaning": "兑换；弥补" },
  { "word": "phobia", "pos": ["n."], "meaning": "恐惧症" },
  { "word": "cork", "pos": ["n."], "meaning": "软木" },
  { "word": "spectator", "pos": ["n."], "meaning": "观众；旁观者" },
  { "word": "initiate", "pos": ["v."], "meaning": "开始，发动" },
  { "word": "armour", "pos": ["n."], "meaning": "盔甲" },
  { "word": "quota", "pos": ["n."], "meaning": "限额；配额" },
  { "word": "accumulate", "pos": ["v."], "meaning": "积攒，积累；积聚" },
  { "word": "embark", "pos": ["v."], "meaning": "开始；着手" },
  { "word": "assert", "pos": ["v."], "meaning": "坚持；维护" },
  { "word": "grease", "pos": ["n."], "meaning": "油脂" },
  { "word": "balcony", "pos": ["n."], "meaning": "阳台" },
  { "word": "fraction", "pos": ["n."], "meaning": "部分，片段；分数" },
  { "word": "confine", "pos": ["v."], "meaning": "限制；监禁" },
  { "word": "norm", "pos": ["n."], "meaning": "规范；平常事物" },
  { "word": "reclaim", "pos": ["v."], "meaning": "取回；废物回收利用" },
  { "word": "dissipate", "pos": ["v."], "meaning": "驱散；消散" },
  { "word": "verbal", "pos": ["adj."], "meaning": "言语的，口头的；文字上的" },
  { "word": "junction", "pos": ["n."], "meaning": "连接；接合处" },
  { "word": "thread", "pos": ["n."], "meaning": "头绪；帖子" },
  { "word": "stoop", "pos": ["v.", "n."], "meaning": "弯腰" },
  { "word": "mat", "pos": ["n."], "meaning": "垫子" },
  { "word": "cordial", "pos": ["adj."], "meaning": "热情友好的" },
  { "word": "captive", "pos": ["adj."], "meaning": "被俘虏的；被迷住的" },
  { "word": "sack", "pos": ["n."], "meaning": "麻袋" },
  { "word": "roam", "pos": ["v."], "meaning": "闲逛，漫步，徘徊" },
  { "word": "vulnerable", "pos": ["adj."], "meaning": "易受伤的，脆弱的；易受影响的" },
  { "word": "convention", "pos": ["n."], "meaning": "会议；习俗；惯例" },
  { "word": "renowned", "pos": ["adj."], "meaning": "著名的" },
  { "word": "hygiene", "pos": ["n."], "meaning": "卫生（学）" },
  { "word": "itinerary", "pos": ["n."], "meaning": "旅行计划" },
  { "word": "suppress", "pos": ["v."], "meaning": "抑制，隐瞒" },
  { "word": "predecessor", "pos": ["n."], "meaning": "前辈" },
  { "word": "prevalent", "pos": ["adj."], "meaning": "普遍的，流行的" },
  { "word": "pigment", "pos": ["n."], "meaning": "天然色素，颜料" },
  { "word": "bind", "pos": ["v.", "n."], "meaning": "捆绑；装订；结合；联结；困境" },
  { "word": "strait", "pos": ["n."], "meaning": "海峡" },
  { "word": "lens", "pos": ["n."], "meaning": "透镜" },
  { "word": "painstaking", "pos": ["adj."], "meaning": "费尽心力的" },
  { "word": "Fahrenheit", "pos": ["adj.", "n."], "meaning": "华氏度（的）" },
  { "word": "reign", "pos": ["v.", "n."], "meaning": "统治（时期）" },
  { "word": "mitigate", "pos": ["v."], "meaning": "减轻，缓和" },
  { "word": "triumph", "pos": ["n."], "meaning": "胜利，凯旋" },
  { "word": "upbringing", "pos": ["n."], "meaning": "抚育，抚养" },
  { "word": "ferry", "pos": ["n.", "v."], "meaning": "渡轮；渡运" },
  { "word": "gross", "pos": ["adj."], "meaning": "总的，毛重的" },
  { "word": "convict", "pos": ["n.", "v."], "meaning": "犯人；证明...有罪" },
  { "word": "oblige", "pos": ["v."], "meaning": "迫使，使感激" },
  { "word": "agenda", "pos": ["n."], "meaning": "议事日程；议程" },
  { "word": "vague", "pos": ["adj.", "n."], "meaning": "模糊的；不明确的；犹豫的；模糊不定状态" },
  { "word": "implicit", "pos": ["adj."], "meaning": "隐含的" },
  { "word": "hemisphere", "pos": ["n."], "meaning": "地球半球" },
  { "word": "surplus", "pos": ["n."], "meaning": "过剩，盈余" },
  { "word": "directory", "pos": ["n."], "meaning": "目录；名录；电话簿" },
  { "word": "derive", "pos": ["v."], "meaning": "源自；得自" },
  { "word": "authentic", "pos": ["adj."], "meaning": "真正的；真实的；真品的" },
  { "word": "vibrate", "pos": ["v."], "meaning": "振动；摇摆" },
  { "word": "culminate", "pos": ["v."], "meaning": "到达高潮，结束" },
  { "word": "halt", "pos": ["v.", "n."], "meaning": "停止" },
  { "word": "tentative", "pos": ["adj.", "n."], "meaning": "试探性的；暂定的；不确定的；试验，假设" },
  { "word": "appraisal", "pos": ["n."], "meaning": "评价；估价" },
  { "word": "earnest", "pos": ["n.", "adj."], "meaning": "认真；保证；真诚；真诚的；重要的" },
  { "word": "sue", "pos": ["v."], "meaning": "控告；起诉" },
  { "word": "advent", "pos": ["n."], "meaning": "出现；到来" },
  { "word": "eloquent", "pos": ["adj."], "meaning": "有口才的；雄辩的" },
  { "word": "formidable", "pos": ["adj."], "meaning": "令人畏惧的；难以克服的" },
  { "word": "seminar", "pos": ["n."], "meaning": "研讨会" },
  { "word": "arbitrary", "pos": ["adj."], "meaning": "随意的" },
  { "word": "fuss", "pos": ["n."], "meaning": "大惊小怪，小题大做" },
  { "word": "uphold", "pos": ["v."], "meaning": "举起；维护，支持" },
  { "word": "inferior", "pos": ["adj."], "meaning": "差的；低劣的；低等的" },
  { "word": "mayor", "pos": ["n."], "meaning": "市长" },
  { "word": "clockwise", "pos": ["adj.", "adv."], "meaning": "顺时针的/地" },
  { "word": "flee", "pos": ["v."], "meaning": "逃跑；避开" },
  { "word": "blast", "pos": ["n.", "v."], "meaning": "爆炸；冲击波；狂欢；疾风；摧毁，炸毁；严厉抨击" },
  { "word": "omit", "pos": ["v."], "meaning": "删去，省去；忽略" },
  { "word": "metaphor",   "pos": ["n."], "meaning": "暗喻" },
  { "word": "contend",    "pos": ["v."], "meaning": "争辩；主张；搏斗；对付" },
  { "word": "possession", "pos": ["n."],       "meaning": "所有物；拥有；财产" },
  { "word": "erratic",    "pos": ["adj."],     "meaning": "反复无常的，不稳定的" },
  { "word": "squeeze",    "pos": ["v.", "n."], "meaning": "挤压；压榨" },
  { "word": "bulb",       "pos": ["n."],       "meaning": "电灯泡；球茎" },
  { "word": "maritime",   "pos": ["adj."],     "meaning": "海上的；沿海的" },
  { "word": "doom",       "pos": ["v."],       "meaning": "注定；判定" },
  { "word": "hum",        "pos": ["n.", "v."], "meaning": "（发出）嗡嗡声" },
  { "word": "raid",       "pos": ["v.", "n."], "meaning": "袭击；突然搜捕；劫掠" },
  { "word": "quarry",     "pos": ["n."],       "meaning": "采石场" },
  { "word": "conceive",   "pos": ["v."],       "meaning": "怀孕；想出" },
  { "word": "casualty",   "pos": ["n."],       "meaning": "死伤者" },
  { "word": "canvas",     "pos": ["n."],       "meaning": "画布；帆布" },
  { "word": "chimney",    "pos": ["n."],       "meaning": "烟囱" },
  { "word": "collar",     "pos": ["n."],       "meaning": "衣领；项圈" },
  { "word": "thrust",     "pos": ["v.", "n."], "meaning": "刺；猛推；推力" },
  { "word": "startle",    "pos": ["n.", "v."], "meaning": "吃惊" },
  { "word": "dispatch",   "pos": ["n.", "v."], "meaning": "调遣；发送（信件）" },
  { "word": "whereby",    "pos": ["adv."],     "meaning": "由此" },
  { "word": "plough",     "pos": ["v."],       "meaning": "犁地；艰难地前进，开垦" },
  { "word": "alliance",   "pos": ["n."],       "meaning": "联盟" },
  { "word": "curb",       "pos": ["v."],       "meaning": "抑制，隐瞒" },
  { "word": "affiliate",  "pos": ["v."],       "meaning": "隶属于；有联系" },
  { "word": "temperament","pos": ["n."],       "meaning": "气质" },
  { "word": "brute",      "pos": ["adj."],     "meaning": "粗暴的" },
  { "word": "buzz",       "pos": ["n."],       "meaning": "活跃的气氛；嗡嗡声" },
  { "word": "vein",       "pos": ["n."],       "meaning": "血管；静脉；风格；性情" },
  { "word": "threshold",  "pos": ["n."],       "meaning": "界限，起点" },
  { "word": "unify",      "pos": ["v."],       "meaning": "使联合；同意" },
  { "word": "harsh",      "pos": ["adj."],     "meaning": "刺耳的；严厉的；恶劣的；粗糙的" },
  { "word": "evacuate",   "pos": ["v."],       "meaning": "撤离" },
  { "word": "contradict", "pos": ["v."],       "meaning": "与...发生矛盾/抵触/对立" },
  { "word": "thesis",     "pos": ["n."],       "meaning": "论文；论题" },
  { "word": "hawk",       "pos": ["n."],       "meaning": "鹰" },
  { "word": "entrepreneur","pos": ["n."],      "meaning": "企业家" },
  { "word": "swarm",      "pos": ["v.", "n."], "meaning": "成群飞行；a~of一大群" },
  { "word": "conspicuous","pos": ["adj."],     "meaning": "显眼的" },
  { "word": "inventory",  "pos": ["n."],       "meaning": "存货清单；详细目录" },
  { "word": "wreck",      "pos": ["v.", "n."], "meaning": "破坏，毁坏；失事船、飞机；残骸" },
  { "word": "tangle",     "pos": ["v.", "n."], "meaning": "缠绕；纠缠" },
  { "word": "neglect",    "pos": ["n.", "v."], "meaning": "忽视；疏忽" },
  { "word": "railroad",   "pos": ["n."],       "meaning": "铁路" },
  { "word": "authorize",  "pos": ["v."],       "meaning": "批准；授权，委托" },
  { "word": "tactics",      "pos": ["n."],            "meaning": "战术" },
  { "word": "intersection", "pos": ["n."],            "meaning": "交点，十字路口" },
  { "word": "escort",       "pos": ["n.", "v."],      "meaning": "护送；护卫" },
  { "word": "swell",        "pos": ["n.", "v."],      "meaning": "膨胀；增大" },
  { "word": "cynical",      "pos": ["adj."],          "meaning": "愤世嫉俗的；多疑的" },
  { "word": "proximity",    "pos": ["n."],            "meaning": "接近" },
  { "word": "premature",    "pos": ["adj."],          "meaning": "早产的；早熟的" },
  { "word": "conform",      "pos": ["v."],            "meaning": "遵照；顺从" },
  { "word": "overlap",      "pos": ["n.", "v."],      "meaning": "重复；重叠" },
  { "word": "masculine",    "pos": ["adj."],          "meaning": "男子气概的" },
  { "word": "saturate",     "pos": ["v."],            "meaning": "使充满；使浸透" },
  { "word": "amateur",      "pos": ["n."],            "meaning": "业余爱好者" },
  { "word": "thermometer",  "pos": ["n."],            "meaning": "温度计；体温计" },
  { "word": "prestige",     "pos": ["n."],            "meaning": "威望；声望" },
  { "word": "parliament",   "pos": ["n."],            "meaning": "国会；议会" },
  { "word": "indigenous",   "pos": ["adj."],          "meaning": "本土的；土生土长的" },
  { "word": "readily",      "pos": ["adv."],          "meaning": "乐意地；迅速地" },
  { "word": "herd",         "pos": ["n."],            "meaning": "兽群；人群" },
  { "word": "extract",      "pos": ["v.", "n."],      "meaning": "提取；摘录；获取" },
  { "word": "plantation",   "pos": ["n."],            "meaning": "种植园" },
  { "word": "entangle",     "pos": ["v."],            "meaning": "使纠缠；使卷入" },
  { "word": "jagged",       "pos": ["adj."],          "meaning": "锯齿状的；不规则的" },
  { "word": "wary",         "pos": ["adj."],          "meaning": "警惕的；小心的" },
  { "word": "peculiar",     "pos": ["adj."],          "meaning": "独特的；古怪的" },
  { "word": "shatter",      "pos": ["v."],            "meaning": "使破碎；使震惊" },
  { "word": "intervene",    "pos": ["v."],            "meaning": "介入；干预；调停" },
  { "word": "certificate",  "pos": ["n."],            "meaning": "证书；证明文件" },
  { "word": "elevate",      "pos": ["v."],            "meaning": "提升；抬高；升华" },
  { "word": "bulk",         "pos": ["n."],            "meaning": "大部分；主体部分" },
  { "word": "robust",       "pos": ["adj."],          "meaning": "强健的；有力的" },
  { "word": "index",        "pos": ["n."],            "meaning": "索引；指数；指标" },
  { "word": "exert",        "pos": ["v."],            "meaning": "施加；运用" },
  { "word": "grope",        "pos": ["v."],            "meaning": "摸索；试探" },
  { "word": "flock",        "pos": ["v."],            "meaning": "聚集；蜂拥而至" },
  { "word": "quarterly",    "pos": ["adj.", "adv."],  "meaning": "每季的；季度性的" },
  { "word": "versatile",    "pos": ["adj."],          "meaning": "多才多艺的；多功能的" },
  { "word": "pigeon",       "pos": ["n."],            "meaning": "鸽子" },
  { "word": "bolt",         "pos": ["n."],            "meaning": "螺栓；门闩" },
  { "word": "slam",         "pos": ["v."],            "meaning": "猛撞；砰然关上" },
  { "word": "array",        "pos": ["n."],            "meaning": "排列；一系列" },
  { "word": "rupture",      "pos": ["n.", "v."],      "meaning": "破裂；断裂" },
  { "word": "chronic",      "pos": ["adj."],          "meaning": "慢性的；长期的" },
  { "word": "haven",        "pos": ["n."],            "meaning": "避风港；安全之地" },
  { "word": "grid",         "pos": ["n."],            "meaning": "网格；电网" },
  { "word": "imminent",     "pos": ["adj."],          "meaning": "迫在眉睫的；即将发生的" },
  { "word": "provided",     "pos": ["conj."],         "meaning": "假如；倘若" },
  { "word": "potent",       "pos": ["adj."],          "meaning": "有效的；强有力的" },
  { "word": "peril",        "pos": ["n."],            "meaning": "危险；险境" },
  { "word": "realm",        "pos": ["n."],            "meaning": "王国；领域；范围" },
  { "word": "divert",       "pos": ["v."],            "meaning": "使转向；转移" },
  { "word": "cane",         "pos": ["n."],            "meaning": "手杖；甘蔗；茎秆" },
  { "word": "famine",       "pos": ["n."],            "meaning": "饥荒" },
  { "word": "tract",        "pos": ["n."],            "meaning": "地带；区域" },
  { "word": "corrupt",      "pos": ["adj."],          "meaning": "腐败的；堕落的" },
  { "word": "naive",        "pos": ["adj."],          "meaning": "天真的；幼稚的" },
  { "word": "collide",      "pos": ["v."],            "meaning": "相撞；冲突" },
  { "word": "elite",        "pos": ["n."],            "meaning": "精英；统治阶层" },
  { "word": "groan",        "pos": ["n.", "v."],      "meaning": "呻吟；呻吟声" },
  { "word": "expire",       "pos": ["v."],            "meaning": "到期；终止；逝世" },
  { "word": "brim",         "pos": ["n."],            "meaning": "边缘；杯口" },
  { "word": "lofty",        "pos": ["adj."],          "meaning": "高耸的；崇高的" },
  { "word": "outlet",       "pos": ["n."],            "meaning": "出口；发泄途径；折扣店" },
  { "word": "reluctant",    "pos": ["adj."],          "meaning": "不情愿的" },
  { "word": "compliant",    "pos": ["adj."],          "meaning": "服从的" },
  { "word": "notorious",    "pos": ["adj."],          "meaning": "臭名昭著的" },
  { "word": "grind",        "pos": ["n.", "v."],      "meaning": "苦差事；研磨" },
  { "word": "enact",        "pos": ["v."],            "meaning": "颁布；实施" },
  { "word": "equity",       "pos": ["n."],            "meaning": "公平；公正；股权" },
  { "word": "bolster",      "pos": ["v."],            "meaning": "支撑；加强；改善" },
  { "word": "credential",   "pos": ["n."],            "meaning": "资历；证明文件" },
  { "word": "fling",        "pos": ["v."],            "meaning": "猛扔；抛掷" },
  { "word": "bet",          "pos": ["v.", "n."],      "meaning": "打赌；赌注" },
  { "word": "excursion",    "pos": ["n."],            "meaning": "短途旅行；郊游" },
  { "word": "zeal",         "pos": ["n."],            "meaning": "热忱；激情" },
  { "word": "faculty",      "pos": ["n."],            "meaning": "全体教员；学院" },
  { "word": "Christian",    "pos": ["n."],            "meaning": "基督徒" },
  { "word": "outright",     "pos": ["adv."],          "meaning": "完全地；直截了当地" },
  { "word": "warehouse",    "pos": ["n."],            "meaning": "仓库" },
  { "word": "recruit",      "pos": ["v.", "n."],      "meaning": "招募；新兵" },
  { "word": "liable",       "pos": ["adj."],          "meaning": "有责任的；易受影响的" },
  { "word": "audit",        "pos": ["n.", "v."],      "meaning": "审计；审核" },
  { "word": "monetary",     "pos": ["adj."],          "meaning": "金钱的；货币的" },
  { "word": "baffle",       "pos": ["v."],            "meaning": "使困惑；难倒" },
  { "word": "spouse",       "pos": ["n."],            "meaning": "配偶" },
  { "word": "creep",        "pos": ["v."],            "meaning": "悄悄移动；潜行" },
  { "word": "revolt",       "pos": ["v.", "n."],      "meaning": "反抗；叛乱" },
  { "word": "refute",       "pos": ["v."],            "meaning": "反驳；驳倒" },
  { "word": "amplify",      "pos": ["v."],            "meaning": "放大；详述；增强" },
  { "word": "propagate",    "pos": ["v."],            "meaning": "传播；宣扬；繁殖" },
  { "word": "compliment",   "pos": ["n.", "v."],      "meaning": "称赞；恭维" },
  { "word": "limb",         "pos": ["n."],            "meaning": "四肢；大枝" },
  { "word": "barren",       "pos": ["adj."],          "meaning": "贫瘠的；荒芜的" },
  { "word": "glide",        "pos": ["v."],            "meaning": "滑翔；滑行" },
  { "word": "miserable",    "pos": ["adj."],          "meaning": "痛苦的；悲惨的" },
  { "word": "rival",        "pos": ["n.", "adj."],    "meaning": "对手；竞争的" },
  { "word": "insulate",     "pos": ["v."],            "meaning": "使绝缘；使隔离" },
  { "word": "misrepresent", "pos": ["v."],            "meaning": "歪曲；误报" },
  { "word": "articulate",   "pos": ["adj.", "v."],    "meaning": "口齿清晰的；清楚表达" },
  { "word": "sprout",       "pos": ["v."],            "meaning": "发芽；开始生长" },
  { "word": "sediment",     "pos": ["n."],            "meaning": "沉积物；沉淀" },
  { "word": "brake", "pos": ["n.","v."], "meaning": "刹车"},
  {
    "word": "margin",
    "pos": [
      "n."
    ],
    "meaning": "利润"
  },
  {
    "word": "flatter",
    "pos": [
      "v."
    ],
    "meaning": "阿谀奉承"
  },
  {
    "word": "shoal",
    "pos": [
      "n."
    ],
    "meaning": "浅滩；一群（鱼）"
  },
  {
    "word": "stagger",
    "pos": [
      "n.",
      "v."
    ],
    "meaning": "蹒跚，摇晃不稳地走"
  },
  {
    "word": "immerse",
    "pos": [
      "v."
    ],
    "meaning": "沉浸，沉浸于"
  },
  {
    "word": "loaf",
    "pos": [
      "v."
    ],
    "meaning": "虚度光阴"
  },
  {
    "word": "mourn",
    "pos": [
      "v."
    ],
    "meaning": "哀悼"
  },
  {
    "word": "tenant",
    "pos": [
      "n."
    ],
    "meaning": "承租人，佃户"
  },
  {
    "word": "stumble",
    "pos": [
      "v.",
      "n."
    ],
    "meaning": "绊倒"
  },
  {
    "word": "permissible",
    "pos": [
      "adj."
    ],
    "meaning": "容许的；许可的"
  },
  {
    "word": "deteriorate",
    "pos": [
      "v."
    ],
    "meaning": "恶化"
  },
  {
    "word": "cereal",
    "pos": [
      "n."
    ],
    "meaning": "谷类食物"
  },
  {
    "word": "deficit",
    "pos": [
      "n."
    ],
    "meaning": "不足额；缺少"
  },
  {
    "word": "stool",
    "pos": [
      "n."
    ],
    "meaning": "凳子"
  },
  {
    "word": "accommodate",
    "pos": [
      "v."
    ],
    "meaning": "为...提供便利；适应"
  },
  {
    "word": "prone",
    "pos": [
      "adj."
    ],
    "meaning": "易于...的"
  },
  {
    "word": "mercury",
    "pos": [
      "n."
    ],
    "meaning": "汞，水银"
  },
  {
    "word": "conscientious",
    "pos": [
      "adj."
    ],
    "meaning": "认真的，勤恳的"
  },
  {
    "word": "bracket",
    "pos": [
      "n."
    ],
    "meaning": "档次，等级段"
  },
  {
    "word": "stall",
    "pos": [
      "v."
    ],
    "meaning": "暂缓，搁置"
  },
  {
    "word": "pearl",
    "pos": [
      "n."
    ],
    "meaning": "珍珠"
  },
  {
    "word": "moan",
    "pos": [
      "n.",
      "v."
    ],
    "meaning": "抱怨"
  },
  {
    "word": "haunt",
    "pos": [
      "v."
    ],
    "meaning": "萦绕，长期纠缠"
  },
  {
    "word": "susceptible",
    "pos": [
      "adj."
    ],
    "meaning": "易受影响的"
  },
  {
    "word": "retrospect",
    "pos": [
      "n."
    ],
    "meaning": "回顾"
  },
  {
    "word": "patent",
    "pos": [
      "n.",
      "v."
    ],
    "meaning": "专利证书；取得专利权"
  },
  {
    "word": "continuity",
    "pos": [
      "n."
    ],
    "meaning": "连续性"
  },
  {
    "word": "simultaneous",
    "pos": [
      "adj."
    ],
    "meaning": "同时的"
  },
  {
    "word": "obsolete",
    "pos": [
      "adj."
    ],
    "meaning": "已过时的"
  },
  {
    "word": "sponge",
    "pos": [
      "n."
    ],
    "meaning": "海绵，松蛋糕"
  },
  {
    "word": "pamphlet",
    "pos": [
      "n."
    ],
    "meaning": "小册子"
  },
  {
    "word": "brisk",
    "pos": [
      "adj."
    ],
    "meaning": "轻快的"
  },
  {
    "word": "unrest",
    "pos": [
      "n."
    ],
    "meaning": "动荡，动乱"
  },
  {
    "word": "ascribe",
    "pos": [
      "v."
    ],
    "meaning": "把...归因于"
  },
  {
    "word": "hatred",
    "pos": [
      "n."
    ],
    "meaning": "憎恨"
  },
  {
    "word": "rear",
    "pos": [
      "v.",
      "adj.",
      "n."
    ],
    "meaning": "抚养；背面（的），后面（的）"
  },
  {
    "word": "enlighten",
    "pos": [
      "v."
    ],
    "meaning": "启发，开导"
  },
  {
    "word": "mortgage",
    "pos": [
      "n."
    ],
    "meaning": "抵押贷款"
  },
  {
    "word": "spontaneous",
    "pos": [
      "adj."
    ],
    "meaning": "自发的"
  },
  {
    "word": "precipitate",
    "pos": [
      "adj."
    ],
    "meaning": "仓促的，贸然的"
  },
  {
    "word": "static",
    "pos": [
      "adj."
    ],
    "meaning": "停滞的"
  },
  {
    "word": "ornament",
    "pos": [
      "n."
    ],
    "meaning": "装饰物"
  },
  {
    "word": "rotten",
    "pos": [
      "adj."
    ],
    "meaning": "腐烂的"
  },
  {
    "word": "slack",
    "pos": [
      "adj.",
      "v."
    ],
    "meaning": "松弛的；逃避工作"
  },
  {
    "word": "linger",
    "pos": [
      "v."
    ],
    "meaning": "逗留"
  },
  {
    "word": "bound",
    "pos": [
      "v."
    ],
    "meaning": "跳跃前行"
  },
  {
    "word": "commence",
    "pos": [
      "v."
    ],
    "meaning": "开始"
  },
  {
    "word": "restrain",
    "pos": [
      "v."
    ],
    "meaning": "制止；阻止"
  },
  {
    "word": "arc",
    "pos": [
      "n."
    ],
    "meaning": "弧"
  },
  {
    "word": "bid",
    "pos": [
      "n.",
      "v."
    ],
    "meaning": "出价；投标；努力争取"
  },
  {
    "word": "terrain",
    "pos": [
      "n."
    ],
    "meaning": "地面"
  },
  {
    "word": "incur",
    "pos": [
      "v."
    ],
    "meaning": "招致"
  },
  {
    "word": "withstand",
    "pos": [
      "v."
    ],
    "meaning": "承受住"
  },
  {
    "word": "slope",
    "pos": [
      "n."
    ],
    "meaning": "山坡；坡；坡度"
  },
  {
    "word": "toll",
    "pos": [
      "n."
    ],
    "meaning": "损害；通行费"
  },
  {
    "word": "dwell",
    "pos": [
      "v."
    ],
    "meaning": "居住"
  },
  {
    "word": "manuscript",
    "pos": [
      "n."
    ],
    "meaning": "手稿；手抄本"
  },
  {
    "word": "spacious",
    "pos": [
      "adj."
    ],
    "meaning": "宽敞的"
  },
  {
    "word": "shabby",
    "pos": [
      "adj."
    ],
    "meaning": "破烂的"
  },
  {
    "word": "invoice",
    "pos": [
      "n.",
      "v."
    ],
    "meaning": "提供费用；清单"
  },
  {
    "word": "badge",
    "pos": [
      "n."
    ],
    "meaning": "徽章"
  },
  {
    "word": "cylinder",
    "pos": [
      "n."
    ],
    "meaning": "圆柱体"
  },
  {
    "word": "offset",
    "pos": [
      "v."
    ],
    "meaning": "抵消"
  },
  {
    "word": "debris",
    "pos": [
      "n."
    ],
    "meaning": "废墟；残骸"
  },
  {
    "word": "spectrum",
    "pos": [
      "n."
    ],
    "meaning": "光谱；范围"
  },
  {
    "word": "pinch",
    "pos": [
      "n."
    ],
    "meaning": "捏；少量"
  },
  {
    "word": "pillar",
    "pos": [
      "n."
    ],
    "meaning": "柱状物"
  },
  {
    "word": "laudable",
    "pos": [
      "adj."
    ],
    "meaning": "值得称赞的"
  },
  {
    "word": "petition",
    "pos": [
      "n."
    ],
    "meaning": "请愿书"
  },
  {
    "word": "reassure",
    "pos": [
      "v."
    ],
    "meaning": "使放心"
  },
  {
    "word": "vice",
    "pos": [
      "n.",
      "adj."
    ],
    "meaning": "缺点；副的"
  },
  {
    "word": "pinpoint",
    "pos": [
      "v."
    ],
    "meaning": "准确找到"
  },
  {
    "word": "spoil",
    "pos": [
      "v."
    ],
    "meaning": "破坏，糟蹋"
  },
  {
    "word": "haul",
    "pos": [
      "v.",
      "n."
    ],
    "meaning": "拖，硬拖；拖运路程"
  },
  {
    "word": "infant",
    "pos": [
      "adj.",
      "n."
    ],
    "meaning": "婴儿（的）"
  },
  {
    "word": "excavate",
    "pos": [
      "v."
    ],
    "meaning": "挖出"
  },
  {
    "word": "equivalent",
    "pos": [
      "adj.",
      "n."
    ],
    "meaning": "相等（的）"
  },
  {
    "word": "linen",
    "pos": [
      "n."
    ],
    "meaning": "亚麻布（的）"
  },
  {
    "word": "nuance",
    "pos": [
      "n."
    ],
    "meaning": "细微差别"
  },
  {
    "word": "inspection",
    "pos": [
      "n."
    ],
    "meaning": "检查，细看"
  },
  {
    "word": "crude",
    "pos": [
      "n.",
      "adj."
    ],
    "meaning": "原油；粗略的"
  },
  {
    "word": "turbulent",
    "pos": [
      "adj."
    ],
    "meaning": "急的；混乱的"
  },
  {
    "word": "denounce",
    "pos": [
      "v."
    ],
    "meaning": "谴责"
  },
  {
    "word": "constrain",
    "pos": [
      "v."
    ],
    "meaning": "限制；约束"
  },
  {
    "word": "furious",
    "pos": [
      "adj."
    ],
    "meaning": "愤怒的"
  },
  {
    "word": "chop",
    "pos": [
      "n.",
      "v."
    ],
    "meaning": "劈"
  },
  {
    "word": "condemn",
    "pos": [
      "v."
    ],
    "meaning": "责备"
  },
  {
    "word": "ceramic",
    "pos": [
      "adj.",
      "n."
    ],
    "meaning": "陶瓷（的）"
  },
  {
    "word": "conviction",
    "pos": [
      "n."
    ],
    "meaning": "坚强信念"
  },
  {
    "word": "sin",
    "pos": [
      "n."
    ],
    "meaning": "罪"
  },
  {
    "word": "commonplace",
    "pos": [
      "adj.",
      "n."
    ],
    "meaning": "平常的；老生常谈"
  },
  {
    "word": "impulse",
    "pos": [
      "adj.",
      "n."
    ],
    "meaning": "冲动（的）"
  },
  {
    "word": "pathetic",
    "pos": [
      "adj."
    ],
    "meaning": "可怜的"
  },
  {
    "word": "elastic",
    "pos": [
      "adj."
    ],
    "meaning": "可伸缩的"
  },
  {
    "word": "alloy",
    "pos": [
      "n."
    ],
    "meaning": "合金"
  },
  {
    "word": "ritual",
    "pos": [
      "n."
    ],
    "meaning": "仪式"
  },
  { "word": "render", "pos": ["v."], "meaning": "使成为" },
  { "word": "trivial", "pos": ["adj."], "meaning": "微不足道的" },
  { "word": "reside", "pos": ["v."], "meaning": "居住" },
  { "word": "traverse", "pos": ["n.", "v."], "meaning": "横越" },
  { "word": "despatch", "pos": ["v."], "meaning": "发送，派遣" },
  { "word": "fracture", "pos": ["v.", "n."], "meaning": "骨折" },
  { "word": "composite", "pos": ["adj.", "n."], "meaning": "合成（的/物）" },
  { "word": "vessel", "pos": ["n."], "meaning": "军舰；容器" },
  { "word": "shipment", "pos": ["n."], "meaning": "装载的货物" },
  { "word": "marginal", "pos": ["adj.", "n."], "meaning": "微小的，边缘的；边缘席位" },
  { "word": "exclusive", "pos": ["adj."], "meaning": "独有的，独家的" },
  { "word": "interim", "pos": ["adj.", "n."], "meaning": "暂时的；中间时期" },
  { "word": "demolish", "pos": ["v."], "meaning": "拆除" },
  { "word": "predominant", "pos": ["adj."], "meaning": "占主导地位的" },
  { "word": "bounty", "pos": ["n."], "meaning": "奖金；富足" },
  { "word": "nylon", "pos": ["n."], "meaning": "尼龙" },
  { "word": "barn", "pos": ["n."], "meaning": "谷仓" },
  { "word": "lane", "pos": ["n."], "meaning": "小径；行车道；跑道" },
  { "word": "bizarre", "pos": ["adj."], "meaning": "稀奇古怪的" },
  { "word": "overrun", "pos": ["v."], "meaning": "横行（侵略）" },
  { "word": "propulsion", "pos": ["n."], "meaning": "推进力" },
  { "word": "crack", "pos": ["v."], "meaning": "打碎；找到解决方法" },
  { "word": "lament", "pos": ["v.", "n."], "meaning": "哀悼；惋惜" },
  { "word": "poise", "pos": ["v."], "meaning": "使稳定" },
  { "word": "scrape", "pos": ["n.", "v."], "meaning": "擦伤；刮擦" },
  { "word": "stack", "pos": ["v."], "meaning": "堆积；堆放" },
  { "word": "idle", "pos": ["v."], "meaning": "无所事事" },
  { "word": "ingenious", "pos": ["adj."], "meaning": "独出心裁的" },
  { "word": "courtesy", "pos": ["n."], "meaning": "礼貌" },
  { "word": "stake", "pos": ["n."], "meaning": "利害关系" },
  { "word": "repel", "pos": ["v."], "meaning": "击退；与...不融合；排斥" },
  { "word": "rebel", "pos": ["n.", "v."], "meaning": "反叛（者）" },
  { "word": "expedition", "pos": ["n."], "meaning": "远征" },
  { "word": "corridor", "pos": ["n."], "meaning": "走廊；狭长地带" },
  { "word": "hurl", "pos": ["n.", "v."], "meaning": "猛投" },
  { "word": "sway", "pos": ["v.", "n."], "meaning": "动摇；支配，影响" },
  { "word": "indispensable", "pos": ["adj."], "meaning": "不可或缺的" },
  { "word": "contract", "pos": ["n."], "meaning": "合同，契约" },
  { "word": "solidarity", "pos": ["n."], "meaning": "团结一致" },
  { "word": "expertise", "pos": ["n."], "meaning": "专门技能" },
  { "word": "sentiment", "pos": ["n."], "meaning": "感情；情绪；观点" },
  { "word": "treaty", "pos": ["n."], "meaning": "条约" },
  { "word": "overt", "pos": ["adj."], "meaning": "明显的；公开的" },
  { "word": "slaughter", "pos": ["n.", "v."], "meaning": "屠杀" },
  { "word": "concession", "pos": ["n."], "meaning": "让步；特许" },
  { "word": "thermal", "pos": ["adj."], "meaning": "温泉的" },
  { "word": "cling", "pos": ["v."], "meaning": "紧贴" },
  { "word": "combat", "pos": ["v."], "meaning": "对付" },
  { "word": "eccentric", "pos": ["adj.", "n."], "meaning": "古怪的（人）" },
  { "word": "vast", "pos": ["adj."], "meaning": "大量的，巨大的；辽阔的" },
  { "word": "harness", "pos": ["v."], "meaning": "利用" },
  { "word": "lump", "pos": ["v."], "meaning": "把...归并在一起" },
  { "word": "aerial", "pos": ["adj."], "meaning": "空中的" },
  { "word": "deviate", "pos": ["v."], "meaning": "偏离" },
  { "word": "acute", "pos": ["adj."], "meaning": "极度的" },
  { "word": "coal", "pos": ["n."], "meaning": "煤" },
  { "word": "cannon", "pos": ["n."], "meaning": "大炮" },
  { "word": "nasty", "pos": ["adj."], "meaning": "恶劣的" },
  { "word": "clutch", "pos": ["v."], "meaning": "紧握，抓住" },
  { "word": "manipulate", "pos": ["v."], "meaning": "操纵" },
  { "word": "testify", "pos": ["v."], "meaning": "作证" },
  { "word": "flare", "pos": ["v."], "meaning": "闪光；爆发" },
  { "word": "habitual", "pos": ["adj."], "meaning": "习惯性的" },
  { "word": "commodity", "pos": ["n."], "meaning": "商品，货物" },
  { "word": "ward", "pos": ["n."], "meaning": "病房" },
  { "word": "warfare", "pos": ["n."], "meaning": "斗争，冲突" },
  { "word": "gear", "pos": ["n.", "v."], "meaning": "档位；齿轮；使适合" },
  { "word": "jeopardize", "pos": ["v."], "meaning": "危及，损害" },
  { "word": "ego", "pos": ["n."], "meaning": "自我" },
  { "word": "insult", "pos": ["n.", "v."], "meaning": "侮辱" },
  { "word": "boast", "pos": ["v."], "meaning": "吹嘘，夸耀；自豪地拥有" },
  { "word": "scrap", "pos": ["n.", "v."], "meaning": "废料；舍弃，报废" },
  { "word": "redundant", "pos": ["adj."], "meaning": "被下岗的；过剩的" },
  { "word": "edible", "pos": ["adj."], "meaning": "可食的" },
  { "word": "intact", "pos": ["adj."], "meaning": "完好无损的" },
  { "word": "fraud", "pos": ["n."], "meaning": "诈骗；骗子" },
  { "word": "utter", "pos": ["v."], "meaning": "自口中发出" },
  { "word": "stationary", "pos": ["adj."], "meaning": "停滞的" },
  { "word": "decimal", "pos": ["n."], "meaning": "小数" },
  { "word": "metropolitan", "pos": ["adj."], "meaning": "大城市的" },
  { "word": "embody", "pos": ["v."], "meaning": "象征，体现" },
  { "word": "canal", "pos": ["n."], "meaning": "运河" },
  { "word": "pretext", "pos": ["n."], "meaning": "借口" },
  { "word": "specify", "pos": ["v."], "meaning": "详细说明" },
  { "word": "tray", "pos": ["n."], "meaning": "盘；托盘" },
  { "word": "plague", "pos": ["n.", "v."], "meaning": "瘟疫；困扰" },
  { "word": "drain", "pos": ["n.", "v."], "meaning": "耗尽" },
  { "word": "nuisance", "pos": ["n."], "meaning": "麻烦事" },
  { "word": "symmetry", "pos": ["n."], "meaning": "对称；均衡" },
  { "word": "hierarchy", "pos": ["n."], "meaning": "等级制度" },
  { "word": "mingle", "pos": ["v."], "meaning": "使混合" },
  { "word": "disperse", "pos": ["v."], "meaning": "分散；散布" },
  { "word": "flaw", "pos": ["n.", "v."], "meaning": "瑕疵，缺点；使有缺陷" },
  { "word": "ascend", "pos": ["v."], "meaning": "沿...上升" },
  { "word": "handicap", "pos": ["n.", "v."], "meaning": "妨碍" },
  { "word": "metric", "pos": ["n."], "meaning": "指标" },
  { "word": "maid", "pos": ["n."], "meaning": "女仆" },
  { "word": "manoeuvre", "pos": ["v."], "meaning": "操纵" },
  { "word": "spill", "pos": ["n.", "v."], "meaning": "溅出，溢出" },
  { "word": "fabricate", "pos": ["v."], "meaning": "建造，制造" },
  { "word": "pledge", "pos": ["v."], "meaning": "保证给予，正式承诺" },
  { "word": "counterpart", "pos": ["n."], "meaning": "对应的人/物" },
  { "word": "namely", "pos": ["adv."], "meaning": "即，也就是" },
  { "word": "superb", "pos": ["adj."], "meaning": "极好的，一流的" },
  { "word": "cruise", "pos": ["n."], "meaning": "乘船游览" },
  { "word": "jolly", "pos": ["adj."], "meaning": "愉快的" },
  { "word": "depute", "pos": ["v."], "meaning": "把...交付给" },
  { "word": "canoe", "pos": ["n."], "meaning": "独木舟" },
  { "word": "avail", "pos": ["n."], "meaning": "益处" },
  { "word": "smash", "pos": ["v."], "meaning": "粉碎，击溃" },
  { "word": "possess", "pos": ["v."], "meaning": "占有，拥有" },
  { "word": "discrete", "pos": ["adj."], "meaning": "分开的" },
  { "word": "delegate", "pos": ["v.", "n."], "meaning": "委派；代表" },
  { "word": "hysterical", "pos": ["adj."], "meaning": "歇斯底里的" },
  { "word": "prolong", "pos": ["v."], "meaning": "延长；拉长" },
  { "word": "vulgar", "pos": ["adj."], "meaning": "粗俗的" },
  { "word": "misery", "pos": ["n."], "meaning": "痛苦" },
  { "word": "dictate", "pos": ["v."], "meaning": "强加，支配" },
  { "word": "rumour", "pos": ["n.", "v."], "meaning": "谣言，传谣" },
  { "word": "implication", "pos": ["n."], "meaning": "暗示；可能的后果" },
  { "word": "impetus", "pos": ["n."], "meaning": "推动力" },
  { "word": "steward", "pos": ["n."], "meaning": "管家" },
  { "word": "periodical", "pos": ["n."], "meaning": "期刊" },
  { "word": "stamp", "pos": ["n."], "meaning": "印记" },
  { "word": "crane", "pos": ["n."], "meaning": "起重机" },
  { "word": "veto", "pos": ["n.", "v."], "meaning": "否决" },
  { "word": "dreadful", "pos": ["adj."], "meaning": "可怕的" },
  { "word": "patrol", "pos": ["n.", "v."], "meaning": "巡逻（兵）" },
  { "word": "lag", "pos": ["v.", "n."], "meaning": "落后，滞后；时间间隔，延搁" },
  { "word": "offspring", "pos": ["n."], "meaning": "后代；子女" },
  { "word": "dial", "pos": ["v.", "n."], "meaning": "拨电话；刻度盘" },
  { "word": "vanity", "pos": ["n."], "meaning": "虚荣" },
  { "word": "brittle", "pos": ["adj."], "meaning": "易碎的" },
  { "word": "retreat", "pos": ["n."], "meaning": "静修时间；退隐处" },
  { "word": "exquisite", "pos": ["adj."], "meaning": "精湛的" },
  { "word": "trim", "pos": ["v.", "adj."], "meaning": "修剪；苗条的；整洁的" },
  { "word": "sheer", "pos": ["adj."], "meaning": "陡峭的" },
  { "word": "sanction", "pos": ["n."], "meaning": "批准" },
  { "word": "assault", "pos": ["n."], "meaning": "攻击；袭击" },
  { "word": "provocative", "pos": ["adj."], "meaning": "挑衅的" },
  { "word": "shrewd", "pos": ["adj."], "meaning": "精明的" },
  { "word": "nominal", "pos": ["adj."], "meaning": "名义上的" },
  { "word": "nursery", "pos": ["adj."], "meaning": "幼儿教育的" },
  { "word": "nonsense", "pos": ["n."], "meaning": "胡说，荒唐举动" },
  { "word": "bureau", "pos": ["n."], "meaning": "局，司" },
  { "word": "elapse", "pos": ["n.", "v."], "meaning": "流逝" },
  { "word": "span", "pos": ["v.", "n."], "meaning": "持续，贯穿；全长，跨度，墩距；持续时间段" },
  { "word": "dense", "pos": ["adj."], "meaning": "茂密的；浓密的" },
  { "word": "rusty", "pos": ["adj."], "meaning": "生锈的" },
  { "word": "curse", "pos": ["n.", "v."], "meaning": "讥咒，咒骂" },
  { "word": "cradle", "pos": ["n."], "meaning": "摇篮" },
  { "word": "consensus", "pos": ["n."], "meaning": "一致同意" },
  { "word": "clip", "pos": ["n."], "meaning": "片段（电影、电视）（切片）" },
  { "word": "motor", "pos": ["adj.", "n."], "meaning": "运动神经的；车；马达" },
  { "word": "insane", "pos": ["n.", "adj."], "meaning": "精神失常的（人）" },
  { "word": "hasty", "pos": ["adj."], "meaning": "匆忙的" },
  { "word": "worm", "pos": ["n.", "v."], "meaning": "蠕虫；蠕动；刺探" },
  { "word": "streamline", "pos": ["v."], "meaning": "使...简化；精简" },
  { "word": "surname", "pos": ["n."], "meaning": "姓" },
  { "word": "venture", "pos": ["n.", "v."], "meaning": "企业，项目；敢于，冒险" },
  { "word": "apt", "pos": ["adj."], "meaning": "有做某事的倾向；适当的" },
  { "word": "utmost", "pos": ["adj."], "meaning": "最大的，极度的" },
  { "word": "manual", "pos": ["adj."], "meaning": "手工的；手动的" },
  { "word": "grim", "pos": ["adj."], "meaning": "令人沮丧的" },
  { "word": "nerve", "pos": ["n."], "meaning": "神经" },
  { "word": "disposition", "pos": ["n."], "meaning": "排列，部署" },
  { "word": "provision", "pos": ["n."], "meaning": "条款；供给" },
  { "word": "prime", "pos": ["adj."], "meaning": "典型的；首要的" },
  { "word": "warrant", "pos": ["v."], "meaning": "使...有必要" },
  { "word": "hoist", "pos": ["v."], "meaning": "升起，吊起" },
  { "word": "prominent", "pos": ["adj."], "meaning": "著名的；显眼的，显著的" },
  { "word": "reciprocal", "pos": ["adj."], "meaning": "相互的，互惠的" },
  { "word": "empirical", "pos": ["adj."], "meaning": "实证的，有根据的" },
  { "word": "executive", "pos": ["n.", "adj."], "meaning": "经理；经营管理的；有执行权的" },
  { "word": "assimilate", "pos": ["v."], "meaning": "融入；使同化" },
  { "word": "presumably", "pos": ["adv."], "meaning": "大概，据推测" },
  { "word": "rejoice", "pos": ["v."], "meaning": "感到高兴" },
  { "word": "apparent", "pos": ["adj."], "meaning": "明显的" },
  { "word": "subtle", "pos": ["adj."], "meaning": "细微的；精妙的，巧妙的" },
  { "word": "collision", "pos": ["n."], "meaning": "碰撞；冲突" },
  { "word": "chamber", "pos": ["n."], "meaning": "（作特殊用途的）房间" },
  { "word": "attendant", "pos": ["n."], "meaning": "服务员，随从" },
  { "word": "perish", "pos": ["v."], "meaning": "毁灭，灭亡" },
  { "word": "bewilder", "pos": ["v."], "meaning": "使不知所措" },
  { "word": "pasture", "pos": ["n."], "meaning": "牧场，草地" },
  { "word": "duplicate", "pos": ["v."], "meaning": "重复" },
  { "word": "lest", "pos": ["conj."], "meaning": "唯恐；以免，担心" },
  { "word": "premise", "pos": ["n."], "meaning": "前提" },
  { "word": "zealous", "pos": ["adj."], "meaning": "热情的，狂热的" },
  { "word": "fare", "pos": ["v.", "n."], "meaning": "进行得（好或坏）；交通费" },
  { "word": "wretched", "pos": ["adj."], "meaning": "可怜的；身心疲惫的" },
  { "word": "corrode", "pos": ["v."], "meaning": "受腐蚀；侵蚀" },
  { "word": "bureaucracy", "pos": ["n."], "meaning": "官僚主义/机构" },
  { "word": "remedy", "pos": ["n."], "meaning": "改进措施" },
  { "word": "cathedral", "pos": ["n."], "meaning": "大教堂" },
  { "word": "allege", "pos": ["v."], "meaning": "声称，指控" },
  { "word": "refrain", "pos": ["v."], "meaning": "克制，抑制" },
  { "word": "deprive", "pos": ["v."], "meaning": "剥夺" },
  { "word": "rein", "pos": ["v.", "n."], "meaning": "控制；缰绳" },
  { "word": "pit", "pos": ["n.", "v."], "meaning": "深坑；使...竞争" },
  { "word": "mount", "pos": ["v."], "meaning": "增长；骑上；登上" },
  { "word": "bribe", "pos": ["v."], "meaning": "向...行贿" },
  { "word": "exempt", "pos": ["adj."], "meaning": "被免除的" },
  { "word": "entitle", "pos": ["v."], "meaning": "使享有权利" },
  { "word": "tumble", "pos": ["n.", "v."], "meaning": "跌倒，摔下" },
  { "word": "diplomatic", "pos": ["adj."], "meaning": "外交的" },
  { "word": "envisage", "pos": ["v."], "meaning": "想象，设想" },
  { "word": "sincere", "pos": ["adj."], "meaning": "真诚的" },
  { "word": "condense", "pos": ["v."], "meaning": "冷凝；浓缩；简缩" },
  { "word": "consolidate", "pos": ["v."], "meaning": "巩固，加强" },
  { "word": "fatigue", "pos": ["n."], "meaning": "疲劳" },
  { "word": "tender", "pos": ["adj."], "meaning": "年幼的；未成熟的" },
  { "word": "dual", "pos": ["adj."], "meaning": "双重的" },
  { "word": "concede", "pos": ["v."], "meaning": "承认" },
  { "word": "adhere", "pos": ["v."], "meaning": "遵守；坚持（+to）；依附" },
  { "word": "inflict", "pos": ["v."], "meaning": "带来；使承担" },
  { "word": "yawn", "pos": ["v."], "meaning": "打哈欠；裂开" },
  { "word": "stain", "pos": ["v."], "meaning": "玷污" },
  { "word": "sober", "pos": ["adj.", "v."], "meaning": "清醒的；变冷静" },
  { "word": "delegation", "pos": ["n."], "meaning": "代表团；委托" },
  { "word": "amends", "pos": ["n."], "meaning": "赔偿；赔罪" },
  { "word": "amend", "pos": ["v."], "meaning": "修订，纠正" },
  { "word": "plausible", "pos": ["adj."], "meaning": "似乎有理的" },
  { "word": "eliminate", "pos": ["v."], "meaning": "消除；排除" },
  { "word": "stiff", "pos": ["adj."], "meaning": "僵硬的；困难的" },
  { "word": "immense", "pos": ["adj."], "meaning": "巨大的，广大的" },
  { "word": "mould", "pos": ["v."], "meaning": "塑造；使形成" },
  { "word": "verge", "pos": ["n.", "v."], "meaning": "路边；临近" },
  { "word": "lever", "pos": ["n."], "meaning": "杠杆；施压手段" },
  { "word": "withhold", "pos": ["v."], "meaning": "拒付，不予" },
  { "word": "grave", "pos": ["n."], "meaning": "墓" },
  { "word": "punctual", "pos": ["adj."], "meaning": "准时的，守时的" },
  { "word": "damp", "pos": ["adj."], "meaning": "潮湿的" },
  { "word": "ponder", "pos": ["v."], "meaning": "仔细考虑，沉思" },
  { "word": "resent", "pos": ["v."], "meaning": "愤恨，憎恶" },
  { "word": "submerge", "pos": ["v."], "meaning": "淹没" },
  { "word": "perception", "pos": ["n."], "meaning": "看法；感觉" },
  { "word": "steep", "pos": ["adj."], "meaning": "急剧的；陡峭的" },
  { "word": "veil", "pos": ["n."], "meaning": "面纱" },
  { "word": "ditch", "pos": ["n."], "meaning": "沟渠" },
  { "word": "vicious", "pos": ["adj."], "meaning": "凶残的；恶意的" },
  { "word": "obscure", "pos": ["v.", "adj."], "meaning": "掩盖；不清楚的" },
  { "word": "skim", "pos": ["v."], "meaning": "盗用；掠过；撇去" },
  { "word": "whilst", "pos": ["conj."], "meaning": "而" },
  { "word": "radical", "pos": ["adj."], "meaning": "激进的；彻底的" },
  { "word": "exile", "pos": ["n.", "v."], "meaning": "流放" },
  { "word": "testimony", "pos": ["n."], "meaning": "证据；证词" },
  { "word": "circuit", "pos": ["n."], "meaning": "电路，线路" },
  { "word": "resemblance", "pos": ["n."], "meaning": "相似" },
  { "word": "regime", "pos": ["n."], "meaning": "政权；养生法，生活规则" },
  { "word": "premium", "pos": ["n.", "adj."], "meaning": "额外费用，溢价；高级的" },
  { "word": "prevail", "pos": ["v."], "meaning": "流行，普遍存在；占优势" },
  { "word": "accord", "pos": ["v.", "n."], "meaning": "（与...）一致，符合；协议" },
  { "word": "concise", "pos": ["adj."], "meaning": "简略的" },
  { "word": "token", "pos": ["n.", "adj."], "meaning": "代币；象征性地" },
  { "word": "mutual", "pos": ["adj."], "meaning": "相互的；共同的" },
  { "word": "apprehension", "pos": ["n."], "meaning": "担心，疑惧" },
  { "word": "prescription", "pos": ["n."], "meaning": "处方" },
  { "word": "hostile", "pos": ["adj."], "meaning": "不友善的；敌方的" },
  { "word": "anonymous", "pos": ["adj."], "meaning": "匿名的" },
  { "word": "lobby", "pos": ["v."], "meaning": "游说（大范围、大声势）" },
  { "word": "bold", "pos": ["adj."], "meaning": "大胆自信的，勇于冒险的" },
  { "word": "solitary", "pos": ["adj."], "meaning": "孤独的" },
  { "word": "conceal", "pos": ["v."], "meaning": "隐藏；掩饰" },
  { "word": "timid", "pos": ["adj."], "meaning": "腼腆的；胆怯的" },
  { "word": "bypass", "pos": ["v."], "meaning": "回避；绕过" },
  { "word": "drawback", "pos": ["n."], "meaning": "缺点" },
  { "word": "marsh", "pos": ["n."], "meaning": "沼泽" },
  { "word": "chord", "pos": ["n."], "meaning": "和弦" },
  { "word": "enterprise", "pos": ["n."], "meaning": "企业；事业，有风险的计划" },
  { "word": "mortal", "pos": ["n."], "meaning": "凡人，人类" },
  { "word": "sector", "pos": ["n."], "meaning": "行业；部门；部分" },
  { "word": "strip", "pos": ["v."], "meaning": "除去；脱衣服" },
  { "word": "analogy", "pos": ["n."], "meaning": "类比" },
  { "word": "cunning", "pos": ["adj."], "meaning": "狡猾的" },
  { "word": "permeate", "pos": ["v."], "meaning": "散布" },
  { "word": "scatter", "pos": ["v."], "meaning": "撒；散开" },
  { "word": "induce", "pos": ["v."], "meaning": "劝说" },
  { "word": "criterion", "pos": ["n."], "meaning": "标准；原则" },
  { "word": "compact", "pos": ["n."], "meaning": "合约；条约" },
  { "word": "gulf", "pos": ["n."], "meaning": "海湾" },
  { "word": "commute", "pos": ["n."], "meaning": "通勤" },
  { "word": "pest", "pos": ["n."], "meaning": "害虫、害兽" },
  { "word": "adverse", "pos": ["adj."], "meaning": "不利的" },
  { "word": "facet", "pos": ["n."], "meaning": "部分，方面" },
  { "word": "contradiction", "pos": ["n."], "meaning": "矛盾" },
  { "word": "quiver", "pos": ["n.", "v."], "meaning": "颤抖" },
  { "word": "atom", "pos": ["n."], "meaning": "原子" },
  { "word": "legislation", "pos": ["n."], "meaning": "法律；立法" },
  { "word": "diffuse", "pos": ["v."], "meaning": "扩散，弥漫" },
  { "word": "adjacent", "pos": ["adj."], "meaning": "毗连的" },
  { "word": "boycott", "pos": ["n.", "v."], "meaning": "抵制" },
  { "word": "elicit", "pos": ["v."], "meaning": "引出" },
  { "word": "bud", "pos": ["n.", "v."], "meaning": "（发）芽" },
  { "word": "synthesis", "pos": ["n."], "meaning": "合成（的/物）" },
  { "word": "comb", "pos": ["v."], "meaning": "梳理" },
  { "word": "retention", "pos": ["n."], "meaning": "留存" },
  { "word": "hook", "pos": ["v."], "meaning": "对...入迷；使上瘾" },
  { "word": "texture", "pos": ["n."], "meaning": "口感；质地；纹理" },
  { "word": "toy", "pos": ["n.", "v."], "meaning": "玩具；玩弄" },
  { "word": "indulge", "pos": ["v."], "meaning": "沉溺；纵容，迁就" },
  { "word": "landlord", "pos": ["n."], "meaning": "房东；地主" },
  { "word": "jury", "pos": ["n."], "meaning": "陪审团" },
  { "word": "bump", "pos": ["n.", "v."], "meaning": "隆起物；撞击" },
  { "word": "vex", "pos": ["v."], "meaning": "使恼怒、烦恼" },
  { "word": "crust", "pos": ["n."], "meaning": "面包皮、面包片" },
  { "word": "ascertain", "pos": ["v."], "meaning": "查明" },
  { "word": "irritate", "pos": ["v."], "meaning": "使烦躁，恼怒" },
  { "word": "imperative", "pos": ["adj."], "meaning": "迫切的" },
  { "word": "rage", "pos": ["n."], "meaning": "狂怒" },
  { "word": "holy", "pos": ["adj."], "meaning": "神圣的" },
  { "word": "petty", "pos": ["adj."], "meaning": "价值不大的" },
  { "word": "log", "pos": ["v.", "n."], "meaning": "登录；原木，正式记录" },
  { "word": "tablet", "pos": ["n."], "meaning": "平板电脑；药片" },
  { "word": "doctrine", "pos": ["n."], "meaning": "教条，信条；法律原则" }
];
// ===== 拼写模式词库（等你发新 Excel 后填入） =====
const WORDS_SPELL = [
  { "word": "persist", "pos": ["v."], "meaning": "坚持" },
  { "word": "insist", "pos": ["v."], "meaning": "坚持" },
  { "word": "persevere", "pos": ["v."], "meaning": "坚持" },
  { "word": "abandon", "pos": ["v."], "meaning": "放弃" },
  { "word": "ability", "pos": ["n."], "meaning": "能力" }
];
