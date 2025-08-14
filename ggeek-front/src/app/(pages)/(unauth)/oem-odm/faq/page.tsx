"use client";

import Styled from "./styles";
import EmptyText from "@/components/layout/EmptyText";
import Pagination from "@/components/ui/buttons/Pagination";
import FaqList from "@/components/layout/FaqList";
import { useState } from "react";
import { faqList } from "@/dummy/services/Dummy";
import useLanguage from "@/hooks/useLanguage";

export default function FaqPage() {
  const { t } = useLanguage("common");

  const [faqIndex, setFaqIndex] = useState<number | null>(null);

  return (
    <Styled.Container>
      <ul className="faqList">
        {faqList.length > 0 ? (
          faqList.map((item) => (
            <li key={item.id} className="faqItem">
              <FaqList
                data={item}
                index={item.id}
                faqIndex={faqIndex}
                setFaqIndex={setFaqIndex}
              />
            </li>
          ))
        ) : (
          <EmptyText text={t("등록된 FAQ가 없습니다.")} />
        )}
      </ul>

      <div className="pagination">
        <Pagination page={1} maxPage={1} list={[1, 2, 3, 4, 5]} />
      </div>
    </Styled.Container>
  );
}
