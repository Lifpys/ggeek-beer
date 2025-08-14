import connector from "../connector";
import {
  monAttendStatusVo,
  scheduleStsVo,
  listWorkShlVo,
  regWorkShlVo,
  deleteWorkShlVo,
  businessTripVo,
  outsideWorkVo,
} from "@/api/service/paramVo";

const getMonAttendStatus = async (data: monAttendStatusVo) => {
  return await connector.authConnector("mbatd02020.getMonAttendStatus", data);
};
const getScheduleSts = async (data: scheduleStsVo) => {
  return await connector.authConnector("mbatd05010.getScheduleSts", data);
};
const getListWorkShl = async (data: listWorkShlVo) => {
  return await connector.authConnector("mbatd01020.getListWorkShl", data);
};
const getListWorkgroup = async () => {
  return await connector.authConnector("mbatd01010.getListWorkgroup");
};
const setRegWorkShl = async (data: regWorkShlVo) => {
  return await connector.authConnector("mbatd01020.setRegWorkShl", data);
};
const setDeleteWorkShl = async (data: deleteWorkShlVo) => {
  return await connector.authConnector("mbatd01020.setDeleteWorkShl", data);
};
const setBusinessTrip = async (data: businessTripVo) => {
  return await connector.authConnector("mbatd02010.setBusinessTrip", data);
};
const setOutsideWork = async (data: outsideWorkVo) => {
  return await connector.authConnector("mbatd02010.setOutsideWork", data);
};

export {
  getMonAttendStatus,
  getScheduleSts,
  getListWorkShl,
  getListWorkgroup,
  setRegWorkShl,
  setDeleteWorkShl,
  setBusinessTrip,
  setOutsideWork,
};

export default {
  getMonAttendStatus,
  getScheduleSts,
  getListWorkShl,
  getListWorkgroup,
  setRegWorkShl,
  setDeleteWorkShl,
  setBusinessTrip,
  setOutsideWork,
};
