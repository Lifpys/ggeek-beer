import Styles from "./styles";
import useCalendar from "@/hooks/useCalendar";
import Image from "next/image";
import { getDateType } from "@/utils/date";
import { useRouter } from "next/navigation";
import useLanguage from "@/hooks/useLanguage";
//img
import IconPrev from "@/assets/image/icon/icon_prev03.svg";
import IconNext from "@/assets/image/icon/icon_next03.svg";

export default function EventCalendar({
  scheduleList,
}: {
  scheduleList: any[];
}) {
  const calendar = useCalendar();
  const router = useRouter();
  const { t } = useLanguage("common");

  function getDayRender(day: any, i: any) {
    const dayKey = getDateType(day.date);
    const todayKey = getDateType(new Date());
    const isToday = !day.isBefore && !day.isAfter && dayKey === todayKey;

    const schedulesForDay = scheduleList.find((s) => s.date === dayKey);

    return (
      <div
        className={`date ${day.isBefore || day.isAfter ? "empty" : ""} ${isToday ? "today" : ""}`}
        key={"day_info_" + "_" + i}
        onClick={
          !day.isBefore && !day.isAfter
            ? () => {
                router.push(`/about/event/detail/${getDateType(day.date)}`);
              }
            : undefined
        }
      >
        <p className="dateText">{day.day}</p>

        {!day.isBefore && !day.isAfter && schedulesForDay && (
          <div className="scheduleWrap">
            {schedulesForDay.scheduleList
              .slice(0, 2)
              .map((s: any, idx: number) => (
                <div
                  className={`schedule ${s.start && "start"} ${s.end && "end"}`}
                  key={s.id || `${dayKey}-${idx}`}
                >
                  {s.title}
                </div>
              ))}

            {schedulesForDay.scheduleList.length > 2 && (
              <p className="more">
                외 {schedulesForDay.scheduleList.length - 2}건
              </p>
            )}
          </div>
        )}
      </div>
    );
  }

  function renderCalendar(dateObject: any) {
    let days = dateObject.days;
    let resultTag: any[] = [];

    resultTag.push(
      <div className="days" key={"calendar_tag_00"}>
        <div>{t("일")}</div>
        <div>{t("월")}</div>
        <div>{t("화")}</div>
        <div>{t("수")} </div>
        <div>{t("목")}</div>
        <div>{t("금")}</div>
        <div>{t("토")}</div>
      </div>
    );

    for (let i = 0; i < days.length; i += 7) {
      const week = days.slice(i, i + 7);
      const hasCurrentMonthDate = week.some(
        (d: any) => !d.isBefore && !d.isAfter
      );
      if (!hasCurrentMonthDate) continue;

      resultTag.push(
        <div className="week" key={"calendar_tag_" + i}>
          {week.map((d: any, idx: number) => getDayRender(d, i + idx))}
        </div>
      );
    }

    return resultTag;
  }

  return (
    <Styles.Container>
      <div className="calendarTop">
        <button onClick={calendar.prevMonthEvent}>
          <Image src={IconPrev} alt="prev" />
        </button>

        <div>
          {calendar.currentDate.getFullYear()}.
          {`${calendar.currentDate.getMonth() + 1}`.padStart(2, "0")}
        </div>

        <button onClick={calendar.nextMonthEvent}>
          <Image src={IconNext} alt="next" />
        </button>
      </div>

      <div className="calendarBody">
        {renderCalendar(calendar.getDaysObject())}
      </div>
    </Styles.Container>
  );
}
