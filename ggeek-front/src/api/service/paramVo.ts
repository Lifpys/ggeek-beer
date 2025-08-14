// 01. Auth
export interface JoinVo {
  regCode: string;
  telNo: string;
}
export interface SaveUserVo {
  empId: string;
  usrPwd: string;
  usrPic: File | string;
  imei: string;
}
export interface LoginVo {
  usrId: string;
  usrPwd: string;
  phone: string;
  appVer: string;
  imei: string;
  token: string;
}

// 02. IdCard
export interface regInVo {
  lat: number;
  lon: number;
  path: string;
  imei: string;
}
export interface regLateVo {
  lat_rsn: string;
  lat_tm: string;
}
export interface regOutVo {
  lat: number;
  lon: number;
  path: string;
  imei: string;
  loc_mismatch_yn: string;
  diff_dist: number;
  shop_lat: number;
  shop_lon: number;
}
export interface locFindFailVo {
  path: string;
}

// 03. Commute
export interface monAttendStatusVo {
  ym: string;
}
export interface scheduleStsVo {
  atdDt: string;
}
export interface listWorkShlVo {
  ym: string;
}
export interface regWorkShlVo {
  dt: string;
  typ: string;
  wrkgrpId: string;
}
export interface deleteWorkShlVo {
  dt: string;
}
export interface businessTripVo {
  usrUid: string;
  lat: string;
  lon: string;
  path: string;
  imei: string;
  btrpNm: string;
  btrpAddr: string;
}
export interface outsideWorkVo {
  usrUid: string;
  lat: string;
  lon: string;
  path: string;
  imei: string;
  owrkNm: string;
  owrkAddr: string;
}

// 04. Vacation
export interface reqVctVo {
  strDt: string;
  endDt: string;
  vctId: string;
}
export interface cancelVctReqVo {
  vctReqId: string;
}

// 05. Work
export interface sendMsgVo {
  rcvEmpIds: string;
  msgTlt: string;
  msgCont: string;
  attFile: File;
}
export interface selectMailVo {
  msgId: string;
}
export interface deleteMsgVo {
  msgId: string;
  msgDiv: string;
}
export interface listEmpVo {
  searchEmp: string;
  arrEmp: string;
  empId: string;
  empNo: string;
  empNm: string;
  shopNm: string;
  posNm: string;
  dutyNm: string;
  jobNm: string;
  picUrl: string;
}
export interface reqCertVo {
  certDt: string;
  certKndCd: string;
  certRevCd: string;
  certRevInfo: string;
}
export interface certReqInfoVo {
  certId: string;
}
export interface cancelCertReqVo {
  certId: string;
}
export interface payStatementVo {
  ym: string;
}
export interface checkPasswordVo {
  usrPwd: string;
}

// 06. Support
export interface selectWorkNoticeVo {
  brdId: string;
}

// 07. My
export interface SavePhotoVo {
  usrPic: File | string;
}
export interface PwdChgVo {
  oldPwd: string;
  newPwd: string;
}
export interface MonthEduStsVo {
  ym: string;
}
export interface SelectEduInfoVo {
  eduShlId: string;
}
export interface SelectDayEduInfoVo {
  dt: string;
}
export interface ListEduCpl {
  yy: string;
}
