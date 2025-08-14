import api from "@/api/service";
import { useQuery } from "react-query";
import { QUERY_OPTIONS } from "@/api/connector";

export default function useIdCard({
  photoParams,
  attendStatusParams,
}: {
  photoParams?: boolean;
  attendStatusParams?: boolean;
} = {}) {
  //
  const getPhoto = useQuery(
    ["getPhoto"],
    async () => {
      const response = await api.idCard.getPhoto();
      if (response) return response;
    },
    { enabled: !!photoParams, ...QUERY_OPTIONS }
  );

  const getAttendStatus = useQuery(
    ["getAttendStatus"],
    async () => {
      const response = await api.idCard.getAttendStatus();
      if (response) return response;
    },
    { enabled: !!attendStatusParams, ...QUERY_OPTIONS }
  );

  return { getPhoto, getAttendStatus };
}
