import api from "@/api/service";
import { useQuery } from "react-query";
import { QUERY_OPTIONS } from "@/api/connector";
import {
  monAttendStatusVo,
  scheduleStsVo,
  listWorkShlVo,
  regWorkShlVo,
  deleteWorkShlVo,
} from "@/api/service/paramVo";

export default function useCommute({
  monAttendStatusParams,
  scheduleStsParams,
  listWorkShlParams,
  listWorkGroupParams,
}: {
  monAttendStatusParams?: monAttendStatusVo;
  scheduleStsParams?: scheduleStsVo;
  listWorkShlParams?: listWorkShlVo;
  listWorkGroupParams?: boolean;
} = {}) {
  //
  const getMonAttendStatus = useQuery(
    ["getMonAttendStatus", monAttendStatusParams],
    async () => {
      const response = await api.commute.getMonAttendStatus(
        monAttendStatusParams!
      );
      if (response) return response;
    },
    { enabled: !!monAttendStatusParams, ...QUERY_OPTIONS }
  );

  const getScheduleSts = useQuery(
    ["getScheduleSts", scheduleStsParams],
    async () => {
      const response = await api.commute.getScheduleSts(scheduleStsParams!);
      if (response) return response;
    },
    { enabled: !!scheduleStsParams, ...QUERY_OPTIONS }
  );

  const getListWorkShl = useQuery(
    ["getListWorkShl", listWorkShlParams],
    async () => {
      const response = await api.commute.getListWorkShl(listWorkShlParams!);
      if (response) return response;
    },
    { enabled: !!listWorkShlParams, ...QUERY_OPTIONS }
  );

  const getListWorkgroup = useQuery(
    ["getListWorkgroup"],
    async () => {
      const response = await api.commute.getListWorkgroup();
      if (response) return response;
    },
    { enabled: !!listWorkGroupParams, ...QUERY_OPTIONS }
  );

  const setRegWorkShl = async (data: regWorkShlVo) => {
    const response = await api.commute.setRegWorkShl(data);
    if (response) return response;
  };

  const setDeleteWorkShl = async (data: deleteWorkShlVo) => {
    const response = await api.commute.setDeleteWorkShl(data);
    if (response) return response;
  };

  return {
    getMonAttendStatus,
    getScheduleSts,
    getListWorkShl,
    getListWorkgroup,
    setRegWorkShl,
    setDeleteWorkShl,
  };
}
