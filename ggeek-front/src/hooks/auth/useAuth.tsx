import api from "@/api/service";
import { JoinVo, LoginVo, SaveUserVo } from "@/api/service/paramVo";
import { useAtom } from "jotai";
import { userAtom } from "@/store/userAtom";
import { useQuery } from "react-query";
import { QUERY_OPTIONS } from "@/api/connector";

export default function useAuth({ agreeParams }: { agreeParams?: any } = {}) {
  const [userData, setUserData] = useAtom(userAtom);

  const setJoin = async (data: JoinVo) => {
    return await api.auth.setJoin(data);
  };

  const setSaveUser = async (data: SaveUserVo) => {
    return await api.auth.setSaveUser(data);
  };

  const setLogin = async (data: LoginVo) => {
    return await api.auth.setLogin(data);
  };

  const getAgree = useQuery(
    ["getAgree"],
    async () => await api.auth.getAgree(),
    { enabled: !!agreeParams, ...QUERY_OPTIONS }
  );

  return {
    userData,
    setUserData,

    setJoin,
    setSaveUser,
    setLogin,
    getAgree,
  };
}
