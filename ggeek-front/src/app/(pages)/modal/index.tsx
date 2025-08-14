"use client";

import { useEffect } from "react";
import useModals from "@/hooks/useModals";
import DefaultModal from "@/components/modal/DefaultModal";
import MainPopupModal from "@/components/modal/MainPopupModal";
import PortfolioModal from "@/components/modal/PortfolioModal";
import usePopup from "@/hooks/usePopup";

// img
export default function ModalPage() {
  // const { renderPopup } = usePopup();
  const modalOption = useModals();

  useEffect(() => {
    const html = document.documentElement;
    if (
      modalOption.defaultModal.show ||
      modalOption.mainPopupModal.show ||
      modalOption.portfolioModal.show
    ) {
      html.classList.add("hidden");
    } else {
      html.classList.remove("hidden");
    }
  }, [modalOption]);

  return (
    <>
      {/* defaultModal */}
      {modalOption.defaultModal.show && (
        <DefaultModal
          modalsOption={modalOption.defaultModal}
          modalClose={() => {
            modalOption.setDefaultModal({
              ...modalOption.defaultModal,
              show: false,
              title: "",
              text: "",
              mainBtnText: "",
              mainBtnClick: () => {},
              subBtnText: "",
              subBtnClick: () => {},
              noClose: false,
            });
          }}
        />
      )}

      {/* mainPopupModal */}
      {modalOption.mainPopupModal.show && (
        <MainPopupModal
          modalsOption={modalOption.mainPopupModal}
          modalClose={() => {
            modalOption.setMainPopupModal({
              ...modalOption.mainPopupModal,
              show: false,
            });
          }}
        />
      )}

      {/* portfolioModal */}
      {modalOption.portfolioModal.show && (
        <PortfolioModal
          modalsOption={modalOption.portfolioModal}
          modalClose={() => {
            modalOption.setPortfolioModal({
              ...modalOption.portfolioModal,
              show: false,
            });
          }}
        />
      )}
    </>
  );
}
