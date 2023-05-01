export type User = {
  title: string;
  description: string;
  desc_cn: string;
  remark: string;
  title_en: string;
  desc_en: string;
  remark_en: string;
  preview: string | null; // null = use our serverless screenshot service
  website: string | null;
  source: string | null;
  tags: TagType[];
  id: number;
};

export type TagType =
  // DO NOT USE THIS TAG: we choose sites to add to favorites
  | "favorite"
  | "classic"
  | "bigdata"
  | "netvisualization"
  | "datacenter"
  | "O2O"
  | "takeaway"
  | "onlinecarhailing"
  | "lifeservices"
  | "software"
  | "saas"
  | "paas"
  | "information"
  | "middleware"
  | "os"
  | "database"
  | "infosecurity"
  | "netsecurity"
  | "security"
  | "iot"
  | "iov"
  | "smartcity"
  | "write"
  | "article"
  | "cloudservices"
  | "cloudstore"
  | "cloudcomputing"
  | "code"
  | "ai"
  | "superfusion"
  | "fiveg" //5g
  | "shareeconomy"
  | "treedtechnology"//3d technology
  | "vrar"
  | "living"
  | "interesting"
  | "life"
  | "social"
  | "philosophy"
  | "mind"
  | "pedagogy"
  | "k12"
  | "earlyedu"
  | "primaryschool"
  | "middleschool"
  | "vocationaledu"
  | "university"
  |  "studyabroad"
  | "academic"
  | "games"
  | "tool"
  | "interpreter"
  | "language"
  | "speech"
  | "comments"
  | "text"
  | "company"
  | "seo"
  | "doctor"
  | "finance"
  | "music"
  | "professional"
  | "contribute"
  | "personal"
  | "selfdriving"
  | "blockchain"
  | "ict" //communications technology
  | "operator"
  | "networkdevice"
  | "internetplus"
  | "quantum"
  | "beidou" //Beidou Navigation
  | "travel"
  | "ecommerce"
  ;

export type Tag = {
  label: string;
  description: string;
  color: string;
};
