"use client";

import Styled from "./styles";
import BasicButton from "@/components/ui/buttons/BasicButton";
import ProductList from "@/components/layout/ProductList";
import Image from "next/image";
import useLanguage from "@/hooks/useLanguage";
import { useRouter } from "next/navigation";
import { monthlyList, relateList } from "@/dummy/services/Dummy";

export default function MonthlyGGeekDetailPage() {
  const { t } = useLanguage("beer");

  const router = useRouter();

  const data = monthlyList[0];
  return (
    <Styled.Container>
      <div className="productWrap">
        <div className="img">
          <Image src={data.hoverImg} alt={data.title} fill sizes="100%" />
        </div>

        <div className="info">
          <p className="enTitle">{data.enTitle}</p>
          <p className="title">{data.title}</p>

          <ul className="detailList">
            {data.detailList.map((item, index) => (
              <li key={"detailItem" + index} className="detailItem">
                <p className="detailTitle">{item.title}</p>
                <p className="detailDesc">{item.desc}</p>
              </li>
            ))}
          </ul>

          <div className="desc">
            <p className="descTitle">{t("상세설명")}</p>
            <p className="descText">{data.desc}</p>
          </div>

          <div className="btnWrap">
            <BasicButton
              title={t("이전으로")}
              className="line"
              onClick={() => {}}
            />

            <BasicButton
              title={t("목록으로")}
              onClick={() => {
                router.back();
              }}
            />

            <BasicButton
              title={t("다음으로")}
              className="line"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>

      <div className="relateWrap">
        <p className="relateTitle">Related GGEEK</p>

        <ul className="relateList">
          {relateList.slice(0, 5).map((item, index) => (
            <li className="relateItem" key={"relateItem" + index}>
              <ProductList
                data={item}
                target
                saleShowYn
                monthShowYn
                href={`/beer/monthly-ggeek/detail/${item.id}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </Styled.Container>
  );
}
