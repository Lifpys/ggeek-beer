import Styles from "./styles";
import BasicCheckbox from "@/components/ui/inputs/BasicCheckbox";
import { useState } from "react";
import usePopup from "@/hooks/usePopup";
import useLanguage from "@/hooks/useLanguage";

function MainPopupModal({ modalClose }: any) {
  const popupInfo = usePopup();
  const [checked, setChecked] = useState(false);
  const { t } = useLanguage("mainPopupModal");

  return (
    <Styles.Container>
      <div className="modalInner">
        <div className="editorWrap">이미지 영역</div>

        <div className="btnWrap">
          <div className="checkWrap">
            <BasicCheckbox
              id="mainPopupModal"
              white
              checkText={t("오늘 하루만 보기")}
              checked={checked}
              onChange={(e) => {
                setChecked(e.target.checked);
              }}
            />
          </div>

          <button
            type="button"
            className="closeBtn"
            onClick={() => {
              modalClose();
              if (checked) popupInfo.hidePopup();
            }}
          >
            {t("닫기")}
          </button>
        </div>
      </div>
    </Styles.Container>
  );
}

export { MainPopupModal };

export default MainPopupModal;
