import { useState, useEffect } from "react";

export default function useTimer() {
  const [isTimeout, setIsTimeout] = useState(0);
  const [min, setMin] = useState("03");
  const [sec, setSec] = useState("00");

  useEffect(() => {
    const countdown = setInterval(() => {
      if (isTimeout == 1) {
        let num = parseInt(sec) - 1;
        let str = String(num).padStart(2, "0");
        setSec(str);
        if (parseInt(sec) === 0) {
          if (parseInt(min) === 0) {
            clearInterval(countdown);
          } else {
            let num2 = parseInt(min) - 1;
            let str2 = String(num2).padStart(2, "0");
            setMin(str2);
            setSec("59");
          }
        }

        if (min == "00" && sec == "00") {
          setMin("00");
          setSec("00");
          setIsTimeout(2);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [min, sec, isTimeout]);

  const clickTimer = () => {
    setMin("03");
    setSec("00");
    setIsTimeout(1);
  };

  return { clickTimer, min, sec, isTimeout };
}
