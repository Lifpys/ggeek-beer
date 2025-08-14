import connector from "../connector";
import { reqVctVo, cancelVctReqVo } from "./paramVo";

const getListVctReq = async () => {
  return await connector.authConnector("mbatd03020.getListVctReq");
};
const getListVct = async () => {
  return await connector.authConnector("mbatd03010.getListVct");
};
const setReqVct = async (data: reqVctVo) => {
  return await connector.authConnector("mbatd03020.setReqVct", data);
};
const setCancelVctReq = async (data: cancelVctReqVo) => {
  return await connector.authConnector("mbatd03020.setCancelVctReq", data);
};
const getAnnUse = async () => {
  return await connector.authConnector("mbatd01040.getAnnUse");
};

export { getListVctReq, getListVct, setReqVct, setCancelVctReq, getAnnUse };

export default {
  getListVctReq,
  getListVct,
  setReqVct,
  setCancelVctReq,
  getAnnUse,
};
