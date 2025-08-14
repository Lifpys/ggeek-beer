import Styles from "./styles";
import Image from "next/image";
import { useState } from "react";
import useLanguage from "@/hooks/useLanguage";

export default function ProductList({
  data,
  hover,
  href,
  target,
  saleShowYn,
  monthShowYn,
  priority,
}: {
  data: any;
  hover?: boolean;
  href: string;
  target?: boolean;
  saleShowYn?: boolean;
  monthShowYn?: boolean;
  priority?: boolean;
}) {
  const { img, hoverImg, title, month, saleYn } = data;
  const { t } = useLanguage("common");

  const [isHover, setIsHover] = useState(false);

  const renderMonth = () => {
    switch (month) {
      case 1:
        return t("1월");
      case 2:
        return t("2월");
      case 3:
        return t("3월");
      case 4:
        return t("4월");
      case 5:
        return t("5월");
      case 6:
        return t("6월");
      case 7:
        return t("7월");
      case 8:
        return t("8월");
      case 9:
        return t("9월");
      case 10:
        return t("10월");
      case 11:
        return t("11월");
      case 12:
        return t("12월");
      default:
    }
  };

  return (
    <Styles.Container
      href={href}
      target={target ? "_blank" : undefined}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="tag">
        {saleShowYn && saleYn === "Y" && (
          <div className="sale">{t("판매중")}</div>
        )}
        {monthShowYn && month && <div className="month">{renderMonth()}</div>}
      </div>

      <div className="img">
        {img && img !== "" && (
          <Image
            src={hover && isHover ? hoverImg : img}
            alt={title}
            fill
            sizes="100%"
            className="img"
            priority={priority}
          />
        )}
      </div>
      <p className="title">{title}</p>
    </Styles.Container>
  );
}
