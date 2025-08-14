import { useAtom } from "jotai";
import * as modalAtom from "@/store/modalAtom";

export default function useModals() {
  const [defaultModal, setDefaultModal] = useAtom(modalAtom.defaultModalAtom);
  const [mainPopupModal, setMainPopupModal] = useAtom(
    modalAtom.mainPopupModalAtom
  );
  const [portfolioModal, setPortfolioModal] = useAtom(
    modalAtom.portfolioModalAtom
  );

  const clearModals = () => {
    setDefaultModal({ show: false, zIndex: 0 });
    setMainPopupModal({ show: false, zIndex: 0 });
    setPortfolioModal({ show: false, zIndex: 0 });
  };

  const clearSubModals = (callback: () => void) => {
    setDefaultModal({ show: false, zIndex: 0 });
    setMainPopupModal({ show: false, zIndex: 0 });
    setPortfolioModal({ show: false, zIndex: 0 });

    setTimeout(() => {
      callback();
    }, 0); // 의존성 배열 제거
  };

  return {
    defaultModal,
    setDefaultModal,
    clearModals,
    clearSubModals,
    mainPopupModal,
    setMainPopupModal,
    portfolioModal,
    setPortfolioModal,
  };
}
