"use client";

import Styled from "./styles";
import Image from "next/image";
import Link from "next/link";
import SearchInput from "@/components/ui/inputs/SearchInput";
import EmptyText from "@/components/layout/EmptyText";
import Pagination from "@/components/ui/buttons/Pagination";
import ImageList from "@/components/layout/ImageList";
import { useState } from "react";
import { useParams } from "next/navigation";
import { getDateType } from "@/utils/date";
import {
  ggeekColumnList,
  behindTheBeerList,
  noticeList,
} from "@/dummy/services/Dummy";
import useLanguage from "@/hooks/useLanguage";

export default function StoryPage() {
  const params = useParams();
  const page = params.page;
  const { t } = useLanguage("story");

  const [search, setSearch] = useState("");

  const data = () => {
    switch (page) {
      case "ggeek-column":
        return ggeekColumnList;

      case "behind-the-beer":
        return behindTheBeerList;

      case "notice":
        return noticeList;

      default:
        return [];
    }
  };

  return (
    <Styled.Container>
      <div className="searchWrap">
        <SearchInput
          value={search}
          setValue={setSearch}
          onSearch={() => {}}
          total={data().length}
        />
      </div>

      {data() && data().length > 0 ? (
        <ul className={`list ${page === "notice" ? "noticeList" : ""}`}>
          {data().map((item) => (
            <li key={item.id} className="item">
              <Link href={`/story/${page}/detail/${item.id}`}>
                {page === "notice" ? (
                  <div className="notice">
                    <p className="title">{item.title}</p>
                    <p className="date">{getDateType(item.date)}</p>
                  </div>
                ) : (
                  <ImageList data={item} />
                )}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <EmptyText text={t("등록된 게시글이 없습니다.")} />
        // <EmptyText text={t("검색결과가 없습니다.")} />
      )}

      <div className="pagination">
        <Pagination page={1} maxPage={1} list={[1, 2, 3, 4, 5]} />
      </div>
    </Styled.Container>
  );
}
