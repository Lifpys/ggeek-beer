const getCategoryId = (path: string) => {
  if (path === "press-conference") return 6;
  if (path === "commentary-briefing") return 7;
  if (path === "policy-briefing") return 8;
  if (path === "press-release") return 9;
  if (path === "notice") return 10;
  if (path === "publicity") return 16;
  if (path === "policy") return 17;
  if (path === "format") return 18;
  return 0;
};
const getCategoryRecordSize = (path: string) => {
  if (path === "press-conference") return 10;
  if (path === "commentary-briefing") return 10;
  if (path === "policy-briefing") return 10;
  if (path === "press-release") return 10;
  if (path === "notice") return 10;
  if (path === "publicity") return 10;
  if (path === "policy") return 10;
  if (path === "format") return 10;
  return 0;
};

const getCategoryPath = (categoryTitle: string) => {
  if (categoryTitle === "기자회견문") return "press-conference";
  if (categoryTitle === "논평 브리핑") return "commentary-briefing";
  if (categoryTitle === "정책 브리핑") return "policy-briefing";
  if (categoryTitle === "보도자료") return "press-release";
  if (categoryTitle === "공지사항") return "notice";
  return "";
};

export default {
  getCategoryId,
  getCategoryRecordSize,
  getCategoryPath,
};
