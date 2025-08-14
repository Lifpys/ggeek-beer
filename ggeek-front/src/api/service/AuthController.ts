import connector from "../connector";
import { JoinVo, SaveUserVo, LoginVo } from "@/api/service/paramVo";

const setJoin = async (data: JoinVo) => {
  return await connector.connectFetchController("mbmbr01010.setJoin", data);
};
const setSaveUser = async (data: SaveUserVo) => {
  return await connector.connectFetchController("mbmbr01010.setSaveUser", data);
};
const setLogin = async (data: LoginVo) => {
  return await connector.connectFetchController("mbmbr02010.setLogin", data);
};
const getAgree = async () => {
  return await connector.connectFetchController("mbmbr00010.getAgree");
};

export { setJoin, setSaveUser, setLogin, getAgree };

export default {
  setJoin,
  setSaveUser,
  setLogin,
  getAgree,
};
