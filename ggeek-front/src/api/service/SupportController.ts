import connector from "../connector";
import { selectWorkNoticeVo } from "@/api/service/paramVo";

const getListWorkNotice = async () => {
  return await connector.authConnector("mbwrk01010.getListWorkNotice");
};
const getSelectWorkNotice = async (data: selectWorkNoticeVo) => {
  return await connector.authConnector("mbwrk01010.getSelectWorkNotice", data);
};
const getMngrInfo = async () => {
  return await connector.authConnector("mbsys01010.getMngrInfo");
};

export { getListWorkNotice, getSelectWorkNotice, getMngrInfo };

export default {
  getListWorkNotice,
  getSelectWorkNotice,
  getMngrInfo,
};
