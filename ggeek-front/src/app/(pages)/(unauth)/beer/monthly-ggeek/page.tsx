"use client";

import Styled from "./styles";
import CategoryTab from "@/components/layout/CategoryTab";
import EmptyText from "@/components/layout/EmptyText";
import ProductList from "@/components/layout/ProductList";
import Pagination from "@/components/ui/buttons/Pagination";
import { monthlyList } from "@/dummy/services/Dummy";
import { useState } from "react";
import useLanguage from "@/hooks/useLanguage";

export default function MonthlyGGeekPage() {
  const { t } = useLanguage("beer");

  const [tabIndex, setTabIndex] = useState(0);

  const tabList = [
    {
      title: t("전체"),
    },
    {
      title: "카테고리",
    },
    {
      title: "카테고리",
    },
    {
      title: "카테고리",
    },
    {
      title: "카테고리",
    },
  ];

  return (
    <Styled.Container>
      <div className="sectionTitle">
        <h2>
          {t(
            "끽비어컴퍼니는 \n“월간 끽비어” 라는 독특하고 꾸준한 프로젝트를 통해 \n매달 새롭고 특별한 맥주를 선보입니다."
          )}
        </h2>

        <p>
          {t(
            "우리의 맥주는 음용성을 강조하거나, 다양한 부재료를 사용하거나, 계절에 어울리는 맥주를 만들기도 합니다."
          )}{" "}
          <br />
          {t(
            "또한, 역사적 의미를 담고 있는 맥주도 끽비어만의 시각으로 재해석하여 소개하기도 합니다."
          )}{" "}
          <br />
          {t(
            "매달 새로운 맛의 경험을 제공합니다. 이 맛있는 여정에 함께 하여 다양한 크래프트 맥주의 무한한 가능성을 탐험해 보세요."
          )}
        </p>
      </div>

      <div className="categoryTab">
        <CategoryTab
          list={tabList}
          tabIndex={tabIndex}
          setTabIndex={setTabIndex}
        />
      </div>

      {monthlyList.length > 0 ? (
        <ul className="productList">
          {monthlyList.map((item, index) => (
            <li key={"productList" + index} className="productItem">
              <ProductList
                data={item}
                href={`/beer/monthly-ggeek/detail/${item.id}`}
                saleShowYn
                monthShowYn
              />
            </li>
          ))}
        </ul>
      ) : (
        <EmptyText text={t("등록된 게시글이 없습니다.")} />
      )}

      <div className="pagination">
        <Pagination page={1} maxPage={10} list={[1, 2, 3, 4, 5]} />
      </div>
    </Styled.Container>
  );
}
