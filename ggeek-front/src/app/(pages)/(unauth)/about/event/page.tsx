"use client";

import Styled from "./styles";
import EventCalendar from "@/components/layout/EventCalendar";
import { scheduleList } from "@/dummy/services/Dummy";

export default function EventPage() {
  return (
    <Styled.Container>
      <EventCalendar scheduleList={scheduleList} />
    </Styled.Container>
  );
}
