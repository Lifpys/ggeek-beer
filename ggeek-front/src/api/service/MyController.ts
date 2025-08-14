import connector from "../connector";
import {
  SavePhotoVo,
  PwdChgVo,
  MonthEduStsVo,
  SelectEduInfoVo,
  SelectDayEduInfoVo,
  ListEduCpl,
} from "@/api/service/paramVo";

const getEmpInfo = async () => {
  return await connector.authConnector("mbhr01010.getEmpInfo");
};
const setSavePhoto = async (data: SavePhotoVo) => {
  return await connector.authConnector("mbmbr01010.setSavePhoto", data);
};
const setPwdChg = async (data: PwdChgVo) => {
  return await connector.authConnector("mbmbr02010.setPwdChg", data);
};
const getMonthEduSts = async (data: MonthEduStsVo) => {
  return await connector.authConnector("mbedu01010.getMonthEduSts", data);
};
const getSelectEduInfo = async (data: SelectEduInfoVo) => {
  return await connector.authConnector("mbedu01010.getSelectEduInfo", data);
};
const getSelectDayEduInfo = async (data: SelectDayEduInfoVo) => {
  return await connector.authConnector("mbedu01010.getSelectDayEduInfo", data);
};
const getListEduCpl = async (data: ListEduCpl) => {
  return await connector.authConnector("mbedu01010.getListEduCpl", data);
};

export {
  getEmpInfo,
  setSavePhoto,
  setPwdChg,
  getMonthEduSts,
  getSelectEduInfo,
  getSelectDayEduInfo,
  getListEduCpl,
};

export default {
  getEmpInfo,
  setSavePhoto,
  setPwdChg,
  getMonthEduSts,
  getSelectEduInfo,
  getSelectDayEduInfo,
  getListEduCpl,
};
