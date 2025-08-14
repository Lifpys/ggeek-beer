"use client";

import Styled from "./styles";
import CategoryTab from "@/components/layout/CategoryTab";
import SearchInput from "@/components/ui/inputs/SearchInput";
import EmptyText from "@/components/layout/EmptyText";
import ProductList from "@/components/layout/ProductList";
import ImageList from "@/components/layout/ImageList";
import Pagination from "@/components/ui/buttons/Pagination";
import Link from "next/link";
import { seasonalCollabList, awardMediaList } from "@/dummy/services/Dummy";
import { useState } from "react";
import { useParams } from "next/navigation";
import useLanguage from "@/hooks/useLanguage";

export default function BeerPage() {
  const { page } = useParams();
  const { t } = useLanguage("beer");

  const [tabIndex, setTabIndex] = useState(0);
  const [search, setSearch] = useState("");

  const data = page === "seasonal-collab" ? seasonalCollabList : awardMediaList;

  const tabList = [
    {
      title: "전체",
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
          {page === "seasonal-collab" ? (
            <>
              {t("끽비어컴퍼니는 시즌에 맞는 기획으로 새로운 맥주를 선보이고,")}
              <br className="pcOnly" />
              {t("다른 브랜드와 협업하여 특별한 맥주를 만들기도 합니다.")}
            </>
          ) : (
            <>
              {t("끽비어가 만든 이야기들,")} <br />
              {t("미디어와 수상을 통해 세상과 연결된 순간들을 담았습니다.")}
            </>
          )}
        </h2>
      </div>

      <div className="categoryTab">
        <CategoryTab
          list={tabList}
          tabIndex={tabIndex}
          setTabIndex={setTabIndex}
        />
      </div>

      <div className="searchWrap">
        <SearchInput
          value={search}
          setValue={setSearch}
          onSearch={() => {}}
          total={data.length}
        />
      </div>

      {data.length > 0 ? (
        <ul
          className={
            "list " +
            (page === "seasonal-collab"
              ? "seasonalCollabList"
              : "awardMediaList")
          }
        >
          {data.map((item, index) => (
            <li key={"list" + index} className="item">
              {page === "seasonal-collab" ? (
                <ProductList
                  data={item}
                  href={`/beer/seasonal-collab/detail/${item.id}`}
                  saleShowYn
                  priority={index === 0}
                />
              ) : (
                <Link href={`/beer/award-media/detail/${item.id}`}>
                  <ImageList data={item} />
                </Link>
              )}
            </li>
          ))}
        </ul>
      ) : (
        // <EmptyText text={t("등록된 게시글이 없습니다.")} />
        <EmptyText text={t("검색결과가 없습니다.")} />
      )}

      <div className="pagination">
        <Pagination page={1} maxPage={10} list={[1, 2, 3, 4, 5]} />
      </div>
    </Styled.Container>
  );
}
