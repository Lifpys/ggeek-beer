"use client";

import Styled from "./styles";
import Image from "next/image";
import Pagination from "@/components/ui/buttons/Pagination";
import { yearRoundList } from "@/dummy/services/Dummy";
import useLanguage from "@/hooks/useLanguage";

export default function YearRoundPage() {
  const { t } = useLanguage("beer");

  const data = yearRoundList[0];

  return (
    <Styled.Container>
      <div className="sectionTitle">
        <h2>
          {t(
            "끽비어컴퍼니에서 연중생산되는 라인으로 \n밸런스가 좋은 맥주들을 선보이고 있습니다."
          )}
        </h2>
      </div>

      <div className="productWrap">
        {yearRoundList.length > 0 ? (
          <>
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
            </div>
          </>
        ) : (
          <p className="emptyText">{t("등록된 제품이 없습니다.")}</p>
        )}
      </div>

      <div className="pagination">
        <Pagination page={1} maxPage={10} list={[1, 2, 3, 4, 5]} />
      </div>
    </Styled.Container>
  );
}
