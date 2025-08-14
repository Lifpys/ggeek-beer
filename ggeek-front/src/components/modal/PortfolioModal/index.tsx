import Styles from "./styles";
import Image from "next/image";
import BasicButton from "@/components/ui/buttons/BasicButton";
import useLanguage from "@/hooks/useLanguage";

function PortfolioModal({ modalsOption, modalClose }: any) {
  const { t } = useLanguage("common");

  const { img, title, desc } = modalsOption.data;

  return (
    <Styles.Container>
      <div className="modalInner">
        <div className="img">
          <Image src={img} alt={title} fill sizes="100%" className="img" />
        </div>

        <div className="detail">
          <div className="textWrap">
            <div className="title">{title}</div>

            <div className="desc">{desc}</div>
          </div>

          <div className="btnWrap">
            <BasicButton
              title={t("이전으로")}
              className="line"
              onClick={() => {}}
            />

            <BasicButton
              title={t("다음으로")}
              className="line"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>

      <button
        type="button"
        className="closeBtn"
        onClick={() => {
          modalClose();
        }}
      >
        {t("닫기")}
      </button>
    </Styles.Container>
  );
}

export { PortfolioModal };

export default PortfolioModal;
