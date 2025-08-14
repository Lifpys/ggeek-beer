"use client";

import Styled from "./styles";
import EmptyText from "@/components/layout/EmptyText";
import Pagination from "@/components/ui/buttons/Pagination";
import ImageList from "@/components/layout/ImageList";
import { portfolioList } from "@/dummy/services/Dummy";
import useModals from "@/hooks/useModals";
import useLanguage from "@/hooks/useLanguage";

export default function PortfolioPage() {
  const { t } = useLanguage("common");

  const modal = useModals();

  return (
    <Styled.Container>
      {portfolioList.length > 0 ? (
        <ul className="portfolioList">
          {portfolioList.map((item) => (
            <li
              key={item.id}
              className="portfolioItem"
              onClick={() => {
                modal.setPortfolioModal({
                  ...modal.portfolioModal,
                  show: true,
                  data: item,
                });
              }}
            >
              <ImageList data={item} />
            </li>
          ))}
        </ul>
      ) : (
        <EmptyText text={t("등록된 게시글이 없습니다.")} />
      )}

      <div className="pagination">
        <Pagination page={1} maxPage={1} list={[1, 2, 3, 4, 5]} />
      </div>
    </Styled.Container>
  );
}
