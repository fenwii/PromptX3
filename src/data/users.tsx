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
    label: translate({ message: "教育" }),
    description: translate({
      message: "与教育相关的内容",
      id: "showcase.tag.pedagogy.description",
    }),
    color: "#fe0999",
  },
  k12: {
    label: translate({ message: "教育/K12" }),
    description: translate({
      message: "与K12教育相关的内容",
      id: "showcase.tag.k12.description",
    }),
    color: "#fe0999",
  }, 
  earlyedu: {
    label: translate({ message: "教育/早教" }),
    description: translate({
      message: "与早教相关的内容",
      id: "showcase.tag.earlyedu.description",
    }),
    color: "#fe0999",
  }, 
  primaryschool: {
    label: translate({ message: "教育/小学" }),
    description: translate({
      message: "与小学教育相关的内容",
      id: "showcase.tag.primaryschool.description",
    }),
    color: "#fe0999",
  }, 
  middleschool: {
    label: translate({ message: "教育/中学" }),
    description: translate({
      message: "与中学教育相关的内容",
      id: "showcase.tag.middleschool.description",
    }),
    color: "#fe0999",
  }, 
  vocationaledu: {
    label: translate({ message: "教育/职教" }),
    description: translate({
      message: "与职业教育相关的内容",
      id: "showcase.tag.vocationaledu.description",
    }),
    color: "#fe0999",
  }, 
  university: {
    label: translate({ message: "教育/高校" }),
    description: translate({
      message: "与高等教育相关的内容",
      id: "showcase.tag.university.description",
    }),
    color: "#fe0999",
  }, 
  train: {
    label: translate({ message: "教育/培训" }),
    description: translate({
      message: "与培训教育相关的内容",
      id: "showcase.tag.train.description",
    }),
    color: "#fe0999",
  }, 
  studyabroad: {
    label: translate({ message: "教育/留学" }),
    description: translate({
      message: "与留学教育相关的内容",
      id: "showcase.tag.studyabroad.description",
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
    label: translate({ message: "工具" }),
    description: translate({
      message: "工具",
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
      message: "软件",
      id: "showcase.tag.software.description",
    }),
    color: "rgb(21, 95, 223)",
  },
  paas: {
    label: translate({ message: "Paas" }),
    description: translate({
      message: "Paas",
      id: "showcase.tag.paas.description",
    }),
    color: "rgb(21, 95, 223)",
  },
  software: {
    label: translate({ message: "软件" }),
    description: translate({
      message: "软件",
      id: "showcase.tag.software.description",
    }),
    color: "rgb(21, 95, 223)",
  },
  iaas: {
    label: translate({ message: "Iaas" }),
    description: translate({
      message: "Iaas",
      id: "showcase.tag.iaas.description",
    }),
    color: "rgb(21, 95, 223)",
  },
  saas: {
    label: translate({ message: "Saas" }),
    description: translate({
      message: "Saas",
      id: "showcase.tag.saas.description",
    }),
    color: "rgb(21, 95, 223)",
  },
  information: {
    label: translate({ message: "信息化" }),
    description: translate({
      message: "信息化",
      id: "showcase.tag.information.description",
    }),
    color: "rgb(21, 95, 223)",
  },
  middleware: {
    label: translate({ message: "中间件" }),
    description: translate({
      message: "中间件",
      id: "showcase.tag.middleware.description",
    }),
    color: "rgb(21, 95, 223)",
  },
  os: {
    label: translate({ message: "操作系统" }),
    description: translate({
      message: "操作系统",
      id: "showcase.tag.os.description",
    }),
    color: "rgb(1, 7, 17)",
  },
  database: {
    label: translate({ message: "数据库" }),
    description: translate({
      message: "数据库",
      id: "showcase.tag.database.description",
    }),
    color: "rgb(21, 95, 223)",
  },
  infosecurity: {
    label: translate({ message: "信息安全" }),
    description: translate({
      message: "信息安全",
      id: "showcase.tag.infosecurity.description",
    }),
    color: "rgb(223, 61, 21)",
  },
  netsecurity: {
    label: translate({ message: "网络安全" }),
    description: translate({
      message: "网络安全",
      id: "showcase.tag.netsecurity.description",
    }),
    color: "rgb(223, 61, 21)",
  },
  security: {
    label: translate({ message: "安防" }),
    description: translate({
      message: "安防",
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
  
  cloudservices: {
    label: translate({ message: "云服务" }),
    description: translate({
      message:"云服务",
      id: "showcase.tag.cloudservices.description",
    }),
    color: "#568c00",
  },
  cloudstore: {
    label: translate({ message: "云存储" }),
    description: translate({
      message:"云存储",
      id: "showcase.tag.cloudstore.description",
    }),
    color: "#568c00",
  },
  cloudcomputing: {
    label: translate({ message: "云计算" }),
    description: translate({
      message:"云计算",
      id: "showcase.tag.cloudcomputing.description",
    }),
    color: "#476812",
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
        "旅游",
      id: "showcase.tag.travel.description",
    }),
    color: "#dfc55b",
  },

  outboundtour: {
    label: translate({ message: "旅游/出境游" }),
    description: translate({
      message:
        "旅游/出境游",
      id: "showcase.tag.outboundtour.description",
    }),
    color: "#c7df5b",
  },
  scenicareatour: {
    label: translate({ message: "旅游/景区游" }),
    description: translate({
      message:
        "旅游/景区游",
      id: "showcase.tag.scenicareatour.description",
    }),
    color: "#bfc90b",
  },
  selfguidedtour: {
    label: translate({ message: "旅游/自由行" }),
    description: translate({
      message:
        "旅游/自由行",
      id: "showcase.tag.selfguidedtour.description",
    }),
    color: "#5bdf5b",
  },
  dutyfree: {
    label: translate({ message: "旅游/免税" }),
    description: translate({
      message:
        "旅游/免税",
      id: "showcase.tag.dutyfree.description",
    }),
    color: "#c1ed76",
  },
  hotel: {
    label: translate({ message: "旅游/酒店" }),
    description: translate({
      message:
        "旅游/酒店",
      id: "showcase.tag.hotel.description",
    }),
    color: "#0d1871",
  },
  liner: {
    label: translate({ message: "旅游/邮轮" }),
    description: translate({
      message:
        "旅游/邮轮",
      id: "showcase.tag.liner.description",
    }),
    color: "#072707",
  },
  themepark: {
    label: translate({ message: "旅游/主题公园" }),
    description: translate({
      message:
        "旅游/主题公园",
      id: "showcase.tag.themepark.description",
    }),
    color: "#1f98d9",
  },
  ecommerce: {
    label: translate({ message: "电商" }),
    description: translate({
      message:
        "电商",
      id: "showcase.tag.ecommerce.description",
    }),
    color: "#cf690f",
  },
  b2c: {
    label: translate({ message: "电商/B2C" }),
    description: translate({
      message:
        "电商/B2C",
      id: "showcase.tag.ecommerce.description",
    }),
    color: "#2749cf",
  },
  b2b: {
    label: translate({ message: "电商/B2B" }),
    description: translate({
      message:
        "电商/B2B",
      id: "showcase.tag.ecommerce.description",
    }),
    color: "#5bdf5b",
  },
  c2c: {
    label: translate({ message: "电商/C2C" }),
    description: translate({
      message:
        "电商/C2C",
      id: "showcase.tag.ecommerce.description",
    }),
    color: "#c60910",
  },
  crossborderecommerce: {
    label: translate({ message: "电商/跨境电商" }),
    description: translate({
      message:
        "电商/跨境电商",
      id: "showcase.tag.crossborderecommerce.description",
    }),
    color: "#7d18e2",
  },
  groupbuying: {
    label: translate({ message: "电商/拼团购" }),
    description: translate({
      message:
        "电商/拼团购",
      id: "showcase.tag.groupbuying.description",
    }),
    color: "#e9bd1e",
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
