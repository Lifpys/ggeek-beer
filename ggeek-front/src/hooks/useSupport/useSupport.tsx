import api from "@/api/service";
import { useQuery } from "react-query";
import { QUERY_OPTIONS } from "@/api/connector";
import { selectWorkNoticeVo } from "@/api/service/paramVo";

export default function useSupport({
  listWorkNoticeParams,
  selectWorkNoticeParams,
  mngrInfoParams,
}: {
  listWorkNoticeParams?: boolean;
  selectWorkNoticeParams?: selectWorkNoticeVo;
  mngrInfoParams?: boolean;
} = {}) {
  //
  const getListWorkNotice = useQuery(
    ["getListWorkNotice"],
    async () => {
      const response = await api.support.getListWorkNotice();
      if (response) return response;
    },
    { enabled: !!listWorkNoticeParams, ...QUERY_OPTIONS }
  );

  const getSelectWorkNotice = useQuery(
    ["getSelectWorkNotice", selectWorkNoticeParams],
    async () => {
      const response = await api.support.getSelectWorkNotice(
        selectWorkNoticeParams!
      );
      if (response) return response;
    },
    { enabled: !!selectWorkNoticeParams, ...QUERY_OPTIONS }
  );

  const getMngrInfo = useQuery(
    ["getMngrInfo"],
    async () => {
      const response = await api.support.getMngrInfo();
      if (response) return response;
    },
    { enabled: !!mngrInfoParams, ...QUERY_OPTIONS }
  );

  return {
    getListWorkNotice,
    getSelectWorkNotice,
    getMngrInfo,
  };
}
