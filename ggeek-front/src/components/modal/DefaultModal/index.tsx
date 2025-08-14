import Styles from "./styles";
import BasicButton from "@/components/ui/buttons/BasicButton";

function DefaultModal({ modalsOption, modalClose }: any) {
  return (
    <Styles.Container>
      <div className="modalInner">
        {modalsOption.title && <p className="title">{modalsOption.title}</p>}

        {modalsOption.text && <p className="text">{modalsOption.text}</p>}

        <div className="btnWrap">
          {modalsOption.subBtnText && (
            <BasicButton
              title={modalsOption.subBtnText}
              className="line"
              onClick={() => {
                modalClose();
                modalsOption.subBtnClick?.();
              }}
            />
          )}
          {modalsOption.mainBtnText && (
            <BasicButton
              title={modalsOption.mainBtnText}
              onClick={() => {
                modalClose();
                modalsOption.mainBtnClick?.();
              }}
            />
          )}
        </div>
      </div>
    </Styles.Container>
  );
}

export { DefaultModal };

export default DefaultModal;
