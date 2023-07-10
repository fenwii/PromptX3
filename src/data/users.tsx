import { translate } from "@docusaurus/Translate";
import { sortBy } from "@site/src/utils/jsUtils";
import { User, TagType, Tag } from './User.d';
import UsersData from "./prompt.json";

export const Tags: { [type in TagType]: Tag } = {
  favorite: {
    label: translate({ message: "常用" }),
    description: translate({
      message: "常用/收藏",
      id: "showcase.tag.favorite.description",
    }),
    color: "#e9669e",
  },
  classic: {
    label: translate({ message: "经典" }),
    description: translate({
      message: "经典",
      id: "showcase.tag.classic.description",
    }),
    color: "#e9669e",
  },
  ai: {
    label: translate({ message: "AI人工智能" }),
    description: translate({
      message: "AI人工智能",
      id: "showcase.tag.ai.description",
    }),
    color: "#ff6100", // Facebook blue
  },
  agi: {
    label: translate({ message: "AGI" }),
    description: translate({
      message: "AGI通用人工智能",
      id: "showcase.tag.agi.description",
    }),
    color: "#e16212", // Facebook blue
  },
  asi: {
    label: translate({ message: "ASI" }),
    description: translate({
      message: "ASI超人工智能",
      id: "showcase.tag.asi.description",
    }),
    color: "#22ff00", // Facebook blue
  },
  knowledgetools: {
    label: translate({ message: "知识工具" }),
    description: translate({
      message: "知识工具/百科/字典",
      id: "showcase.tag.knowledgetools.description",
    }),
    color: "#a44fb7",
  },
  startup: {
    label: translate({ message: "创业" }),
    description: translate({
      message: "创业全生命周期",
      id: "showcase.tag.startup.description",
    }),
    color: "#1d2fcf",
  },
  pevc: {
    label: translate({ message: "创投" }),
    description: translate({
      message: "创投全生命周期",
      id: "showcase.tag.pevc.description",
    }),
    color: "#0e71f3",
  },
  homeoffice: {
    label: translate({ message: "家族办公室" }),
    description: translate({
      message: "家族办公室全生命周期",
      id: "showcase.tag.homeoffice.description",
    }),
    color: "#11de4b",
  },
  fiveg: {
    label: translate({ message: "5G" }),
    description: translate({
      message: "5G",
      id: "showcase.tag.fiveg.description",
    }),
    color: "#141be5", // Facebook blue
  },
  shareeconomy: {
    label: translate({ message: "共享经济" }),
    description: translate({
      message: "共享经济",
      id: "showcase.tag.shareeconomy.description",
    }),
    color: "#d24317", // Facebook blue
  }, 
  treedtechnology: {
    label: translate({ message: "3D技术" }),
    description: translate({
      message: "3D技术",
      id: "showcase.tag.treedtechnology.description",
    }),
    color: "#d24317", // Facebook blue
  },
  vrar: {
    label: translate({ message: "VRAR" }),
    description: translate({
      message: "VRAR",
      id: "showcase.tag.vrar.description",
    }),
    color: "#141be5", // Facebook blue
  },
  living: {
    label: translate({ message: "生活质量" }),
    description: translate({
      message: "健身、营养、厨师、化妆、造型",
      id: "showcase.tag.living.description",
    }),
    color: "#cf92e0",
  },
  interesting: {
    label: translate({ message: "趣味知识" }),
    description: translate({
      message: "趣味知识",
      id: "showcase.tag.interesting.description",
    }),
    color: "#127f82",
  },
  life: {
    label: translate({ message: "自助百科" }),
    description: translate({
      message: "生活知识/自助百科",
      id: "showcase.tag.life.description",
    }),
    color: "#a44fb7",
  },
  social: {
    label: translate({ message: "心理/社交" }),
    description: translate({
      message: "心理/社交",
      id: "showcase.tag.social.description",
    }),
    color: "#ee3308",
  },
  philosophy: {
    label: translate({ message: "哲学/宗教" }),
    description: translate({
      message: "哲学/宗教",
      id: "showcase.tag.philosophy.description",
    }),
    color: "#ffcaa9",
  },
  mind: {
    label: translate({ message: "发散思维" }),
    description: translate({
      message: "质疑、思考、联想、归纳",
      id: "showcase.tag.mind.description",
    }),
    color: "#86699e",
  },
  pedagogy: {
    label: translate({ message: "Ai教育" }),
    description: translate({
      message: "教育相关的内容,K12/早教/小学/中学/职教/高校/培训/留学",
      id: "showcase.tag.pedagogy.description",
    }),
    color: "#fe0999",
  },
  academic: {
    label: translate({ message: "学术/教师" }),
    description: translate({
      message: "与学术或学校相关的人和事物",
      id: "showcase.tag.academic.description",
    }),
  color: "#fe6829",
  },
  games: {
    label: translate({ message: "游戏" }),
    description: translate({
      message: "游戏",
      id: "showcase.tag.games.description",
    }),
    color: "#574C57",
  },
  tool: {
    label: translate({ message: "Ai工具" }),
    description: translate({
      message: "Ai工具",
      id: "showcase.tag.tool.description",
    }),
    color: "#4267b2", // Facebook blue
  },
  interpreter: {
    label: translate({ message: "终端/解释器" }),
    description: translate({
      message: "终端/解释器",
      id: "showcase.tag.interpreter.description",
    }),
    color: "#ffa11c", // Facebook blue
  },
  language: {
    label: translate({ message: "语言/翻译" }),
    description: translate({
      message: "语言生成、转换、翻译、识别等多种工具",
      id: "showcase.tag.language.description",
    }),
    color: "#39ca30",
  },
  speech: {
    label: translate({ message: "辩论/演讲" }),
    description: translate({
      message: "辩论/演讲",
      id: "showcase.tag.speech.description",
    }),
    color: "#9c1d10",
  },
  comments: {
    label: translate({ message: "点评/评鉴" }),
    description: translate({
      message: "点评/评鉴",
      id: "showcase.tag.comments.description",
    }),
    color: "#eeef99",
  },
  text: {
    label: translate({ message: "文本/词语" }),
    description: translate({
      message: "文本/词语",
      id: "showcase.tag.text.description",
    }),
    color: "#554236",
  },
  company: {
    label: translate({ message: "企业职位" }),
    description: translate({
      message: "一般企业内的岗位",
      id: "showcase.tag.company.description",
    }),
    color: "#124f4e",
  },
  seo: {
    label: translate({ message: "SEO" }),
    description: translate({
      message: "文本/关键词拓展生成",
      id: "showcase.tag.seo.description",
    }),
    color: "#BC9F77",
  },
  doctor: {
    label: translate({ message: "医生" }),
    description: translate({
      message: "医生",
      id: "showcase.tag.doctor.description",
    }),
    color: "#0e7774",
  },
  finance: {
    label: translate({ message: "金融顾问" }),
    description: translate({
      message: "金融行业的岗位",
      id: "showcase.tag.finance.description",
    }),
    color: "#14cfc3",
  },
  music: {
    label: translate({ message: "音乐" }),
    description: translate({
      message: "音乐",
      id: "showcase.tag.music.description",
    }),
    color: "#5cecdc",
  },
  professional: {
    label: translate({ message: "行业顾问" }),
    description: translate({
      message: "律师、茶艺师等需要专业知识的岗位",
      id: "showcase.tag.professional.description",
    }),
    color: "#ffcfc3",
  },
  contribute: {
    label: translate({ message: "投稿" }),
    description: translate({
      message: "来自大家的投稿作品，能帮助我们开拓思路",
      id: "showcase.tag.contribute.description",
    }),
    color: "#cecd21",
  },
  personal: {
    label: translate({ message: "Personal" }),
    description: translate({
      message: "个人非生产力使用，仅作参考",
      id: "showcase.tag.personal.description",
    }),
    color: "#ebcb63",
  },
  bigdata: {
    label: translate({ message: "大数据" }),
    description: translate({
      message: "大数据",
      id: "showcase.tag.bigdata.description",
    }),
    color: "#75581e",
  },
  netvisualization: {
    label: translate({ message: "网络可视化" }),
    description: translate({
      message: "网络可视化",
      id: "showcase.tag.netvisualization.description",
    }),
    color: "#d6a84d",
  },
 datacenter: {
    label: translate({ message: "数据中心" }),
    description: translate({
      message: "数据中心",
      id: "showcase.tag.datacenter.description",
    }),
    color: "#d6a84d",
  },
  O2O: {
    label: translate({ message: "O2O" }),
    description: translate({
      message: "O2O",
      id: "showcase.tag.O2O.description",
    }),
    color: "#66e980",
  },
  takeaway: {
    label: translate({ message: "外卖" }),
    description: translate({
      message: "外卖",
      id: "showcase.tag.takeaway.description",
    }),
    color: "#75581e",
  },
  onlinecarhailing: {
    label: translate({ message: "网约车" }),
    description: translate({
      message: "网约车",
      id: "showcase.tag.onlinecarhailing.description",
    }),
    color: "#4e1e75",
  },
  lifeservices: {
    label: translate({ message: "生活服务" }),
    description: translate({
      message: "生活服务",
      id: "showcase.tag.lifeservices.description",
    }),
    color: "#228c60",
  },
  software: {
    label: translate({ message: "软件" }),
    description: translate({
      message: "软件/Paas/Iaas/Saas/信息化/中间件/操作系统/数据库",
      id: "showcase.tag.software.description",
    }),
    color: "rgb(21, 95, 223)",
  },
  security: {
    label: translate({ message: "信息安全" }),
    description: translate({
      message: "信息安全/网络安全/安防",
      id: "showcase.tag.security.description",
    }),
    color: "rgb(223, 61, 21)",
  },
  iot: {
    label: translate({ message: "物联网" }),
    description: translate({
      message: "物联网",
      id: "showcase.tag.iot.description",
    }),
    color: "rgb(91, 28, 12)",
  },	
  iov: {
    label: translate({ message: "车联网" }),
    description: translate({
      message: "车联网",
      id: "showcase.tag.iov.description",
    }),
    color: "rgb(166, 21, 223)",
  }, 
  smartcity: {
    label: translate({ message: "智慧城市" }),
    description: translate({
      message: "智慧城市",
      id: "showcase.tag.smartcity.description",
    }),
    color: "rgb(21, 223, 78)",
  }, 
   	
write: {
    label: translate({ message: "写作辅助" }),
    description: translate({
      message: "对文章的语法和风格进行润色，以帮助你完成写作",
      id: "showcase.tag.write.description",
    }),
    color: "#75581e",
  },	
  article: {
    label: translate({ message: "文章/报告" }),
    description: translate({
      message: "小说、论文、新闻、剧本、报告等有一定样式的文章",
      id: "showcase.tag.article.description",
    }),
    color: "#dfd545",
  }, 
  cloudcomputing: {
    label: translate({ message: "云服务" }),
    description: translate({
      message:"云服务/云存储/云计算",
      id: "showcase.tag.cloudservices.description",
    }),
    color: "#568c00",
  },
  code: {
    label: translate({ message: "IT/编程" }),
    description: translate({
      message:
        "虽然说是编程，但 ChatGPT 是按照要求给出编程步骤的建议或简单的样例代码，这些代码只能作为测试，仍然需要程序员来修改。",
      id: "showcase.tag.code.description",
    }),
    color: "#8c2f00",
  },
  superfusion: {
    label: translate({ message: "超融合" }),
    description: translate({
      message:
        "超融合",
      id: "showcase.tag.superfusion.description",
    }),
    color: "#ef5e16",
  },
  selfdriving: {
    label: translate({ message: "无人驾驶" }),
    description: translate({
      message:
        "无人驾驶",
      id: "showcase.tag.selfdriving.description",
    }),
    color: "#16ef4c",
  },
  blockchain: {
    label: translate({ message: "区块链" }),
    description: translate({
      message:
        "区块链",
      id: "showcase.tag.blockchain.description",
    }),
    color: "#121412",
  },
  ict: {
    label: translate({ message: "通信技术" }),
    description: translate({
      message:
        "通信技术",
      id: "showcase.tag.ict.description",
    }),
    color: "#121412",
  },
  operator: {
    label: translate({ message: "运营商" }),
    description: translate({
      message:
        "运营商",
      id: "showcase.tag.operator.description",
    }),
    color: "#121412",
  },
  networkdevice: {
    label: translate({ message: "网络设备" }),
    description: translate({
      message:
        "网络设备",
      id: "showcase.tag.networkdevice.description",
    }),
    color: "#121412",
  },
  internetplus: {
    label: translate({ message: "互联网+" }),
    description: translate({
      message:
        "互联网+",
      id: "showcase.tag.internetplus.description",
    }),
    color: "#1a921a",
  },
  quantum: {
    label: translate({ message: "量子技术" }),
    description: translate({
      message:
        "量子技术",
      id: "showcase.tag.quantum.description",
    }),
    color: "#0ce90c",
  },
  beidou: {
    label: translate({ message: "北斗导航" }),
    description: translate({
      message:
        "北斗导航",
      id: "showcase.tag.beidou.description",
    }),
    color: "#5bdf5b",
  },
  travel: {
    label: translate({ message: "旅游" }),
    description: translate({
      message:
        "旅游/出境游/自由行/景区游/免税/酒店/主题公园",
      id: "showcase.tag.travel.description",
    }),
    color: "#dfc55b",
  },
  ecommerce: {
    label: translate({ message: "电商" }),
    description: translate({
      message:
        "电商/B2C/B2B/C2C/跨境电商/拼团购",
      id: "showcase.tag.ecommerce.description",
    }),
    color: "#cf690f",
  },
  motherandbaby: {
    label: translate({ message: "母婴" }),
    description: translate({
      message:
        "母婴",
      id: "showcase.tag.motherandbaby.description",
    }),
    color: "#1ee98a",
  },
  logistics: {
    label: translate({ message: "物流" }),
    description: translate({
      message:
        "物流",
      id: "showcase.tag.logistics.description",
    }),
    color: "#09512f",
  },
  express: {
    label: translate({ message: "快递" }),
    description: translate({
      message:
        "快递",
      id: "showcase.tag.express.description",
    }),
    color: "#e9ce1e",
  },
  chain: {
    label: translate({ message: "连锁" }),
    description: translate({
      message:
        "连锁",
      id: "showcase.tag.chain.description",
    }),
    color: "#3c7f1a",
  },
  homefurnishing: {
    label: translate({ message: "家居" }),
    description: translate({
      message:
        "家居",
      id: "showcase.tag.homefurnishing.description",
    }),
    color: "#e91ec7",
  },
  fashion: {
    label: translate({ message: "时尚" }),
    description: translate({
      message:
        "时尚/珠宝/化妆品/奢侈品",
      id: "showcase.tag.fashion.description",
    }),
    color: "#e91e8e",
  },
  retail: {
    label: translate({ message: "零售" }),
    description: translate({
      message:
        "零售/商超/无人零售/日用百货/办公用品",
      id: "showcase.tag.retail.description",
    }),
    color: "#e91e3d",
  },
  fresh: {
    label: translate({ message: "生鲜" }),
    description: translate({
      message:
        "生鲜",
      id: "showcase.tag.fresh.description",
    }),
    color: "#e9691e",
  },
  drink: {
    label: translate({ message: "饮料" }),
    description: translate({
      message:
        "饮料/咖啡/乳业/茶饮/瓶装水",
      id: "showcase.tag.drink.description",
    }),
    color: "#1ee2e9",
  },
  pet: {
    label: translate({ message: "宠物" }),
    description: translate({
      message:
        "宠物",
      id: "showcase.tag.pet.description",
    }),
    color: "#1e98e9",
  },
  traffic: {
    label: translate({ message: "出行" }),
    description: translate({
      message:
        "出行/高铁/地铁/船/飞机",
      id: "showcase.tag.traffic.description",
    }),
    color: "#2c1ee9",
  },

  food: {
    label: translate({ message: "食品" }),
    description: translate({
      message:
        "食品/卤制品/肉制品/调味品/保健品/烘焙甜点/休闲零食/速食",
      id: "showcase.tag.food.description",
    }),
    color: "#3d1ee9",
  },
  catering: {
    label: translate({ message: "餐饮" }),
    description: translate({
      message:
        "餐饮/火锅/快餐/中式餐",
      id: "showcase.tag.catering.description",
    }),
    color: "#e9df1e",
  },
  wine: {
    label: translate({ message: "酒类" }),
    description: translate({
      message:
        "酒类/啤酒/白酒/葡萄酒",
      id: "showcase.tag.wine.description",
    }),
    color: "#1ec7e9",
  }, 
  retirement: {
    label: translate({ message: "养老" }),
    description: translate({
      message:
        "养老",
      id: "showcase.tag.retirement.description",
    }),
    color: "#c0e91e",
  }, 
  hr: {
    label: translate({ message: "人力资源" }),
    description: translate({
      message:
        "人力资源",
      id: "showcase.tag.hr.description",
    }),
    color: "#364e09",
  }, 
  tobacco: {
    label: translate({ message: "烟草" }),
    description: translate({
      message:
        "烟草/卷烟/电子烟",
      id: "showcase.tag.tobacco.description",
    }),
    color: "#1e4ae9",
  }, 
  toy: {
    label: translate({ message: "玩具" }),
    description: translate({
      message:
        "玩具",
      id: "showcase.tag.toy.description",
    }),
    color: "#85a035",
  }, 
  entertainment: {
    label: translate({ message: "休闲娱乐" }),
    description: translate({
      message:
        "休闲娱乐",
      id: "showcase.tag.entertainment.description",
    }),
    color: "#5fe776",
  }, 
  medicine: {
    label: translate({ message: "医药" }),
    description: translate({
      message:
        "医药/新药/制剂/仿制药/化学药/生物药/原料药/中成药/维生素",
      id: "showcase.tag.medicine.description",
    }),
    color: "#cee91e",
  }, 
  medicalequipment: {
    label: translate({ message: "医疗器械" }),
    description: translate({
      message:
        "医疗器械/体外诊断/医学影像/医用耗材",
      id: "showcase.tag.medicalequipment.description",
    }),
    color: "#941ee9",
  }, 
  gene: {
    label: translate({ message: "基因技术" }),
    description: translate({
      message:
        "基因技术",
      id: "showcase.tag.gene.description",
    }),
    color: "#c71ee9",
  }, 
  medicalservice: {
    label: translate({ message: "医疗服务" }),
    description: translate({
      message:
        "医疗服务/医院/眼科/口腔/心血管/糖尿病/体检/麻醉/肿瘤/医保/康复/骨科/毛发医疗",
      id: "showcase.tag.medicalservice.description",
    }),
    color: "#e91e6c",
  }, 
  vaccinum: {
    label: translate({ message: "疫苗" }),
    description: translate({
      message:
        "疫苗",
      id: "showcase.tag.vaccinum.description",
    }),
    color: "#32e91e",
  }, 
  pharmacy: {
    label: translate({ message: "药店" }),
    description: translate({
      message:
        "药店",
      id: "showcase.tag.pharmacy.description",
    }),
    color: "#e9a91e",
  }, 
  mdicalbeauty: {
    label: translate({ message: "医疗美容" }),
    description: translate({
      message:
        "医疗美容",
      id: "showcase.tag.mdicalbeauty.description",
    }),
    color: "#1ee9cb",
  }, 
  pharmaceuticaloutsourcing: {
    label: translate({ message: "医药外包" }),
    description: translate({
      message:
        "医药外包/CRO/医药流通",
      id: "showcase.tag.pharmaceuticaloutsourcing.description",
    }),
    color: "#dfe91e",
  }, 
  live: {
    label: translate({ message: "直播" }),
    description: translate({
      message:
        "直播",
      id: "showcase.tag.live.description",
    }),
    color: "#1e6ce9",
  }, 
  sport: {
    label: translate({ message: "体育" }),
    description: translate({
      message:
        "体育",
      id: "showcase.tag.live.description",
    }),
    color: "#281ee9",
  }, 
  movie: {
    label: translate({ message: "影视" }),
    description: translate({
      message:
        "影视/电影/电视剧/综艺/网络剧/影院",
      id: "showcase.tag.movie.description",
    }),
    color: "#249710",
  }, 
  game: {
    label: translate({ message: "游戏" }),
    description: translate({
      message:
        "游戏/手游/页游/端游/主机游戏/云游戏",
      id: "showcase.tag.game.description",
    }),
    color: "#1ee9d8",
  }, 
  ads: {
    label: translate({ message: "广告" }),
    description: translate({
      message:
        "广告/OTT/户外广告/互联网广告",
      id: "showcase.tag.ads.description",
    }),
    color: "#94e91e",
  },
  anime: {
    label: translate({ message: "动漫" }),
    description: translate({
      message:
        "动漫",
      id: "showcase.tag.anime.description",
    }),
    color: "#e9e91e",
  },
  video: {
    label: translate({ message: "视频" }),
    description: translate({
      message:
        "视频/短视频/超高清/在线视频/视频会议",
      id: "showcase.tag.video.description",
    }),
    color: "#621ee9",
  },
  audio : {
    label: translate({ message: "音频" }),
    description: translate({
      message:
        "音频",
      id: "showcase.tag.audio.description",
    }),
    color: "#cb1ee9",
  },
  esports: {
    label: translate({ message: "电竞" }),
    description: translate({
      message:
        "电竞",
      id: "showcase.tag.esports.description",
    }),
    color: "#1ee91e",
  },
  read: {
    label: translate({ message: "阅读" }),
    description: translate({
      message:
        "阅读/图书/出版/书店/网络文学/数字阅读",
      id: "showcase.tag.read.description",
    }),
    color: "#e6e91e",
  },
  read: {
    label: translate({ message: "阅读" }),
    description: translate({
      message:
        "阅读/图书/出版/书店/网络文学/数字阅读",
      id: "showcase.tag.read.description",
    }),
    color: "#1ee925",
  },
  knowledgepayment: {
    label: translate({ message: "知识付费" }),
    description: translate({
      message:
        "知识付费",
      id: "showcase.tag.knowledgepayment.description",
    }),
    color: "#c7e91e",
  },
  wemedia: {
    label: translate({ message: "自媒体" }),
    description: translate({
      message:
        "自媒体",
      id: "showcase.tag.wemedia.description",
    }),
    color: "#391ee9",
  }, 
  cyberstareconomy: {
    label: translate({ message: "网红经济" }),
    description: translate({
      message:
        "网红经济",
      id: "showcase.tag.cyberstareconomy.description",
    }),
    color: "#e9a91e",
  }, 
  copyright: {
    label: translate({ message: "版权" }),
    description: translate({
      message:
        "版权",
      id: "showcase.tag.copyright.description",
    }),
    color: "#1ee958",
  },
  semiconductor: {
    label: translate({ message: "半导体" }),
    description: translate({
      message:
        "半导体/芯片/晶圆/封测/CMOS/存储器/IC设计/射频/FPGA/MEMS/功率器件/溅射靶材/传感器/MCU",
      id: "showcase.tag.copyright.description",
    }),
    color: "#9f6412",
  },
  uav: {
    label: translate({ message: "无人机" }),
    description: translate({
      message:
        "无人机",
      id: "showcase.tag.uav.description",
    }),
    color: "#076321",
  },
  car: {
    label: translate({ message: "汽车" }),
    description: translate({
      message:
        "汽车/整车/零部件/汽车后市场/汽车电子/特种车辆",
      id: "showcase.tag.car.description",
    }),
    color: "#0e9e88",
  },
  newmaterials: {
    label: translate({ message: "新材料" }),
    description: translate({
      message:
        "新材料/硅片/碳纤维/金刚线/染料/玻璃/石墨/粘胶/纳米/钛白粉/陶瓷/锂电材料/膜材料/合金/玻纤",
      id: "showcase.tag.newmaterials.description",
    }),
    color: "#1e39e9",
  }, 
robot: {
  label: translate({ message: "机器人" }),
  description: translate({
    message:
      "机器人",
    id: "showcase.tag.newmaterials.description",
  }),
  color: "#ba1ee9",
}, 
led: {
  label: translate({ message: "LED" }),
  description: translate({
    message:
      "LED",
    id: "showcase.tag.led.description",
  }),
  color: "#1ee9a9",
}, 
   
intelligentmanufacturing: {
  label: translate({ message: "智能制造" }),
  description: translate({
    message:
      "智能制造",
    id: "showcase.tag.intelligentmanufacturing.description",
  }),
  color: "#69e91e",
}, 
aerospace: {
  label: translate({ message: "航空航天" }),
  description: translate({
    message:
      "航空航天/卫星/航空/商业发射",
    id: "showcase.tag.aerospace.description",
  }),
  color: "#11a878",
},  
phone: {
  label: translate({ message: "手机" }),
  description: translate({
    message:
      "手机",
    id: "showcase.tag.phone.description",
  }),
  color: "#11a878",
},  
laser: {
  label: translate({ message: "激光" }),
  description: translate({
    message:
      "激光",
    id: "showcase.tag.laser.description",
  }),
  color: "#ddede8",
},  
plc: {
  label: translate({ message: "工业控制" }),
  description: translate({
    message:
      "工业控制/伺服/减速器/控制器/机床",
    id: "showcase.tag.plc.description",
  }),
  color: "#19eca9",
},  
warindustry: {
  label: translate({ message: "军工" }),
  description: translate({
    message:
      "军工/武器/军机/坦克/军舰/导弹/军贸/国防",
    id: "showcase.tag.warindustry.description",
  }),
  color: "#ec9419",
},  
equipment: {
  label: translate({ message: "装备机械" }),
  description: translate({
    message:
      "装备机械/挖掘机/电梯/高空作业/液压",
    id: "showcase.tag.equipment.description",
  }),
  color: "#19ecb0",
},  
photoelectric: {
  label: translate({ message: "光电技术" }),
  description: translate({
    message:
      "光电技术/光学/摄像头/光电组件",
    id: "showcase.tag.photoelectric.description",
  }),
  color: "#b0ec19",
},  

electronic: {
  label: translate({ message: "电子元件" }),
  description: translate({
    message:
      "电子元件/MLCC/天线/面板/连接器/PCB/FPC/电容器/继电器/偏光片/滤波器/覆铜板",
    id: "showcase.tag.electronic.description",
  }),
  color: "#010200",
},  

hardware: {
  label: translate({ message: "智能硬件" }),
  description: translate({
    message:
      "智能硬件/智能手表/智能音箱/TWS",
    id: "showcase.tag.hardware.description",
  }),
  color: "#10dde4",
},  

radar: {
  label: translate({ message: "雷达" }),
  description: translate({
    message:
      "雷达",
    id: "showcase.tag.radar.description",
  }),
  color: "#1030e4",
},  
electroniccontrol : {
  label: translate({ message: "电机电控" }),
  description: translate({
    message:
      "电机电控",
    id: "showcase.tag.electroniccontrol.description",
  }),
  color: "#10e429",
},  

metalmachinery : {
  label: translate({ message: "五金机械" }),
  description: translate({
    message:
      "五金机械",
    id: "showcase.tag.metalmachinery.description",
  }),
  color: "#e48f10",
},  

instruments: {
  label: translate({ message: "仪器仪表" }),
  description: translate({
    message:
      "仪器仪表",
    id: "showcase.tag.instruments.description",
  }),
  color: "#e48f10",
},  

motorcycle: {
  label: translate({ message: "摩托车" }),
  description: translate({
    message:
      "摩托车",
    id: "showcase.tag.motorcycle.description",
  }),
  color: "#e41037",
}, 
photovoltaic: {
  label: translate({ message: "光伏" }),
  description: translate({
    message:
      "光伏/组件/跟踪支架",
    id: "showcase.tag.photovoltaic.description",
  }),
  color: "#4810e4",
},

atmosphere: {
  label: translate({ message: "大气" }),
  description: translate({
    message:
      "大气",
    id: "showcase.tag.atmosphere.description",
  }),
  color: "#10e4a8",
},

windpower: {
  label: translate({ message: "风电" }),
  description: translate({
    message:
      "风电",
    id: "showcase.tag.windpower.description",
  }),
  color: "#e44c10",
},

watertreatment: {
  label: translate({ message: "水处理" }),
  description: translate({
    message:
      "水处理",
    id: "showcase.tag.watertreatment.description",
  }),
  color: "#10e457",
},

watertreatment: {
  label: translate({ message: "水处理" }),
  description: translate({
    message:
      "水处理",
    id: "showcase.tag.watertreatment.description",
  }),
  color: "#10e457",
},
energystorage: {
  label: translate({ message: "储能" }),
  description: translate({
    message:
      "储能",
    id: "showcase.tag.energystorage.description",
  }),
  color: "#e4a410",
},

};



const Users: User[] = UsersData as User[];
export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
  let result = Users;
  // Sort by prompt weight
  result = sortBy(result, (user) => -user.weight);
  // Sort by prompt title
  result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (user) => !user.tags.includes("favorite"));
  return result;
}

export const sortedUsers = sortUsers();
