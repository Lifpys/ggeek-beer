import api from "@/api/service";
import { useQuery } from "react-query";
import { QUERY_OPTIONS } from "@/api/connector";
import {
  SavePhotoVo,
  PwdChgVo,
  MonthEduStsVo,
  SelectEduInfoVo,
  SelectDayEduInfoVo,
  ListEduCpl,
} from "@/api/service/paramVo";

export default function useMy({
  empInfoParams,
  monthEduStsParams,
  selectEduInfoParams,
  selectDayEduInfoParams,
  listEduCplParams,
}: {
  empInfoParams?: boolean;
  monthEduStsParams?: MonthEduStsVo;
  selectEduInfoParams?: SelectEduInfoVo;
  selectDayEduInfoParams?: SelectDayEduInfoVo;
  listEduCplParams?: ListEduCpl;
} = {}) {
  //
  const getEmpInfo = useQuery(
    ["getEmpInfo"],
    async () => {
      const response = await api.my.getEmpInfo();
      if (response) return response;
    },
    { enabled: !!empInfoParams, ...QUERY_OPTIONS }
  );

  const setSavePhoto = async (data: SavePhotoVo) => {
    return await api.my.setSavePhoto(data);
  };

  const setPwdChg = async (data: PwdChgVo) => {
    return await api.my.setPwdChg(data);
  };

  const getMonthEduSts = useQuery(
    ["getMonthEduSts", monthEduStsParams],
    async () => {
      const response = await api.my.getMonthEduSts(monthEduStsParams!);
      if (response) return response;
    },
    { enabled: !!monthEduStsParams, ...QUERY_OPTIONS }
  );

  const getSelectEduInfo = useQuery(
    ["getSelectEduInfo", selectEduInfoParams],
    async () => {
      const response = await api.my.getSelectEduInfo(selectEduInfoParams!);
      if (response) return response;
    },
    { enabled: !!selectEduInfoParams, ...QUERY_OPTIONS }
  );

  const getSelectDayEduInfo = useQuery(
    ["getSelectDayEduInfo", selectDayEduInfoParams],
    async () => {
      const response = await api.my.getSelectDayEduInfo(
        selectDayEduInfoParams!
      );
      if (response) return response;
    },
    { enabled: !!selectDayEduInfoParams, ...QUERY_OPTIONS }
  );

  const getListEduCpl = useQuery(
    ["getListEduCpl", listEduCplParams],
    async () => {
      const response = await api.my.getListEduCpl(listEduCplParams!);
      if (response) return response;
    },
    { enabled: !!listEduCplParams, ...QUERY_OPTIONS }
  );

  return {
    getEmpInfo,
    setSavePhoto,
    setPwdChg,
    getMonthEduSts,
    getSelectEduInfo,
    getSelectDayEduInfo,
    getListEduCpl,
  };
}
