import { useState } from "react";

export default function useCalendar({ startDay = "일" } = {}) {
  const DAYS = ["일", "월", "화", "수", "목", "금", "토"];
  const dayIndex = DAYS.findIndex((day) => day === startDay);
  const sortedDays = [...DAYS.slice(dayIndex), ...DAYS.slice(0, dayIndex)];

  const [currentDate, setCurrentDate] = useState(new Date());
  const [value, setValue] = useState<Date | null>(null);

  function getDaysObject() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    // 이전 달의 마지막 날들
    const prevMonth = Array.from(
      { length: (firstDay.getDay() + 7 - dayIndex) % 7 },
      (_, i) => {
        const day = new Date(year, month, -i);
        return {
          date: day,
          day: day.getDate(),
          title: DAYS[day.getDay()],
          weekend: day.getDay() === 0 || day.getDay() === 6,
          isBefore: true,
        };
      }
    ).reverse();

    // 현재 달의 날들
    const currentMonth = Array.from({ length: lastDay.getDate() }, (_, i) => {
      const day = new Date(year, month, i + 1);
      return {
        date: day,
        day: i + 1,
        title: DAYS[day.getDay()],
        weekend: day.getDay() === 0 || day.getDay() === 6,
      };
    });

    // 다음 달의 시작 날들
    const remainingDays = 42 - (prevMonth.length + currentMonth.length);
    const nextMonth = Array.from({ length: remainingDays }, (_, i) => {
      const day = new Date(year, month + 1, i + 1);
      return {
        date: day,
        day: i + 1,
        title: DAYS[day.getDay()],
        weekend: day.getDay() === 0 || day.getDay() === 6,
        isAfter: true,
      };
    });

    return {
      days: [...prevMonth, ...currentMonth, ...nextMonth],
      sortedDays,
      years: year,
      month: month + 1,
    };
  }

  const moveMonth = (delta: number) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + delta);
      return newDate;
    });
  };

  const moveToDate = (date: Date | string) => {
    setCurrentDate(new Date(date));
  };

  return {
    moveToDate,
    nextMonthEvent: () => moveMonth(1),
    prevMonthEvent: () => moveMonth(-1),
    getDaysObject,
    currentDate,
    value,
    onClickDate: setValue,
  };
}
