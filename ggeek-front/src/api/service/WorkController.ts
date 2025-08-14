import connector from "../connector";
import {
  listEmpVo,
  deleteMsgVo,
  selectMailVo,
  sendMsgVo,
  reqCertVo,
  certReqInfoVo,
  cancelCertReqVo,
  payStatementVo,
  checkPasswordVo,
} from "./paramVo";

const getListRcvMsg = async () => {
  return await connector.authConnector("mbwrk02010.getListRcvMsg");
};
const getListSndMsg = async () => {
  return await connector.authConnector("mbwrk02010.getListSndMsg");
};
const sendMsg = async (data: sendMsgVo) => {
  return await connector.authConnector("mbwrk02010.sendMsg", data);
};
const getSelectMail = async (data: selectMailVo) => {
  return await connector.authConnector("mbwrk02010.getSelectMail", data);
};
const setDeleteMsg = async (data: deleteMsgVo) => {
  return await connector.authConnector("mbwrk02010.setDeleteMsg", data);
};
const getListEmp = async (data: listEmpVo) => {
  return await connector.authConnector("mbwrk02010.getListEmp", data);
};
const getCertBaseInfo = async () => {
  return await connector.authConnector("mbhr04010.getCertBaseInfo");
};
const setReqCert = async (data: reqCertVo) => {
  return await connector.authConnector("mbhr04010.setReqCert", data);
};
const getListCertReq = async () => {
  return await connector.authConnector("mbhr04010.getListCertReq");
};
const getCertReqInfo = async (data: certReqInfoVo) => {
  return await connector.authConnector("mbhr04010.getCertReqInfo", data);
};
const setCancelCertReq = async (data: cancelCertReqVo) => {
  return await connector.authConnector("mbhr04010.setCancelCertReq", data);
};
const getPayStatement = async (data: payStatementVo) => {
  return await connector.authConnector("mbpay01010.getPayStatement", data);
};
const getCheckPassword = async (data: checkPasswordVo) => {
  return await connector.authConnector("mbpay01010.getCheckPassword", data);
};

export {
  getListRcvMsg,
  getListSndMsg,
  sendMsg,
  getSelectMail,
  setDeleteMsg,
  getListEmp,
  getCertBaseInfo,
  setReqCert,
  getListCertReq,
  getCertReqInfo,
  setCancelCertReq,
  getPayStatement,
  getCheckPassword,
};

export default {
  getListRcvMsg,
  getListSndMsg,
  sendMsg,
  getSelectMail,
  setDeleteMsg,
  getListEmp,
  getCertBaseInfo,
  setReqCert,
  getListCertReq,
  getCertReqInfo,
  setCancelCertReq,
  getPayStatement,
  getCheckPassword,
};
