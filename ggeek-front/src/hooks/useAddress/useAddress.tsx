import { useState } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";

export default function useAddress(props?: { initialValues?: any }) {
  const CURRENT_URL =
    "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
  const open = useDaumPostcodePopup(CURRENT_URL);

  const [inputs, setInputs] = useState({
    postcode: props?.initialValues?.postcode || "",
    address: props?.initialValues?.address || "",
    addressDetail: props?.initialValues?.addressDetail || "",
    sido: props?.initialValues?.sido || "",
    sigungu: props?.initialValues?.sigungu || "",
  });

  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") extraAddress += data.bname;
      if (data.buildingName !== "")
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    setInputs((v) => ({
      ...v,
      postcode: data.zonecode,
      address: fullAddress,
      sido: data.sido,
      sigungu: data.sigungu,
    }));
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return {
    handleClick,
    ...inputs,
    setInputs,
  };
}
