import { useAtom } from "jotai";
import { useEffect } from "react";
import { langAtom } from "@/store/langAtom";
import languages from "@/locales/languages";

// 언어 데이터 구조를 위한 타입 정의
interface LanguageContent {
  [key: string]: {
    [suffix: string]: string;
  };
}

interface Languages {
  [namespace: string]: LanguageContent;
}

// languages 객체에 타입 적용
const langs = languages as Languages;

export default function useLanguage(namespace: string = "common") {
  const [suffix, setSuffix] = useAtom(langAtom);
  const currentLanguage = namespace || "common";

  const setLanguage = (item: string): void => {
    sessionStorage.setItem("language", item);
    initSuffix();
  };

  const initSuffix = (): void => {
    const lang = sessionStorage.getItem("language");
    setSuffix(lang || ""); // Default to "en" instead of null
  };

  const t = (text: string): string => {
    if (!langs[currentLanguage] || !langs[currentLanguage][text] || !suffix) {
      return text;
    }

    return langs[currentLanguage][text][suffix] || text;
  };

  useEffect(() => {
    initSuffix();
  }, []);

  return {
    t,
    setLanguage,
    suffix,
  };
}
