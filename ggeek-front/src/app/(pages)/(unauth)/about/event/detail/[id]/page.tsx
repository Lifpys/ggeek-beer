"use client";

import Styled from "./styles";
import BasicButton from "@/components/ui/buttons/BasicButton";
import EmptyText from "@/components/layout/EmptyText";
import EventDetail from "./_components/EventDetail";
import { eventDetailData } from "@/dummy/services/Dummy";
import { useParams } from "next/navigation";
import { useState } from "react";
import useLanguage from "@/hooks/useLanguage";

export default function EventDetailPage() {
  const { id } = useParams();
  const { t } = useLanguage("about");

  const [isMoreView, setIsMoreView] = useState(false);

  return (
    <Styled.Container>
      <div className="top">
        <div className="date">{id}</div>

        <BasicButton
          title={t("날짜 다시 선택")}
          className="white reSelectDateBtn"
          onClick={() => {}}
        />
      </div>

      {eventDetailData?.length && eventDetailData?.length > 0 ? (
        <ul className="scheduleList">
          {eventDetailData?.map((item) => {
            return (
              <li className="scheduleItem" key={"schedule_" + item.title}>
                <EventDetail data={item} />
              </li>
            );
          })}
        </ul>
      ) : (
        <EmptyText text={t("등록된 스케줄이 없습니다.")} />
      )}
    </Styled.Container>
  );
}
