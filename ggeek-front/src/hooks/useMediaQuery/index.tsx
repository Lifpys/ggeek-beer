import React from "react";
import { useEffect, useState } from "react";

function useMediaQuery(mediaQueryString: string) {
  const [matches, setMatches] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQueryString);
    const listener = () => setMatches(!!mediaQueryList.matches);

    listener();

    mediaQueryList.addListener(listener);
    return () => mediaQueryList.removeListener(listener);
  }, [mediaQueryString]);

  return matches;
}

const Mobile = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  return <React.Fragment>{isMobile && children}</React.Fragment>;
};

const PC = ({ children }: { children: React.ReactNode }) => {
  const isPc = useMediaQuery("(min-width: 768px)");
  return <React.Fragment>{isPc && children}</React.Fragment>;
};

export { Mobile, PC };

export default {
  Mobile,
  PC,
};
