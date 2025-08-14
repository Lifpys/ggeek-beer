import connector from "../connector";
import { regInVo, regOutVo, regLateVo, locFindFailVo } from "./paramVo";

const getPhoto = async () => {
  return await connector.authConnector("mbmbr01010.getPhoto");
};
const getAttendStatus = async () => {
  return await connector.authConnector("mbatd02020.getAttendStatus");
};
const setRegIn = async (data: regInVo) => {
  return await connector.authConnector("mbatd02010.setRegIn", data);
};
const setRegLate = async (data: regLateVo) => {
  return await connector.authConnector("mbatd02010.setRegLate", data);
};
const setRegOut = async (data: regOutVo) => {
  return await connector.authConnector("mbatd02010.setRegOut", data);
};
const setLocFindFail = async (data: locFindFailVo) => {
  return await connector.authConnector("mbatd02010.setLocFindFail", data);
};
const getNonReadNoticeCount = async () => {
  return await connector.authConnector("mbwrk01010.getNonReadNoticeCount");
};

export {
  getPhoto,
  getAttendStatus,
  setRegIn,
  setRegLate,
  setRegOut,
  setLocFindFail,
  getNonReadNoticeCount,
};

export default {
  getPhoto,
  getAttendStatus,
  setRegIn,
  setRegLate,
  setRegOut,
  setLocFindFail,
  getNonReadNoticeCount,
};
