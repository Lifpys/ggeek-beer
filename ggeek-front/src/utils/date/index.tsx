// 날짜 validate
function dateValidate(d: string | Date): Date {
  let date: Date | null = null;
  if (d instanceof Date) date = d;
  else if (typeof d === "string") date = new Date(d.replace(/-/gi, "/"));
  else date = new Date();
  if (!date || isNaN(date.getTime())) return new Date();
  return date;
}

// 날짜 포맷팅
// formatDate("{년}년 {0월}월 {0일}일");
const formatDate = (
  template: string,
  d: string | Date = new Date(),
  week: string[] = ["일", "월", "화", "수", "목", "금", "토"]
): string => {
  const date = dateValidate(d);
  const formatMap: Record<string, string> = {
    "{년}": String(date.getFullYear()),
    "{월}": String(date.getMonth() + 1),
    "{일}": String(date.getDate()),
    "{0월}": String(date.getMonth() + 1).padStart(2, "0"),
    "{0일}": String(date.getDate()).padStart(2, "0"),
    "{요일}": week[date.getDay()] || "",
    "{시}": String(date.getHours()),
    "{시12}": String(date.getHours() % 12),
    "{분}": String(date.getMinutes()),
    "{초}": String(date.getSeconds()),
    "{밀리초}": String(date.getMilliseconds()).padStart(3, "0"),
    "{0시}": String(date.getHours()).padStart(2, "0"),
    "{0시12}": String(date.getHours() % 12).padStart(2, "0"),
    "{0분}": String(date.getMinutes()).padStart(2, "0"),
    "{0초}": String(date.getSeconds()).padStart(2, "0") /*
    "{오전/오후}": 오전과 오후를 구분하는 형식 ("/"로 구분) */,
  };
  let result = template.replace(
    /{년}|{일}|{월}|{0일}|{0월}|{요일}|{시}|{시12}|{분}|{초}|{밀리초}|{0시}|{0시12}|{0분}|{0초}/g,
    (match) => formatMap[match] || match
  );
  return (result = result.replace(
    /\{([^}]+)\/([^}]+)}/g,
    (_, morning, afternoon) => {
      return date.getHours() < 12 ? morning : afternoon;
    }
  ));
};

// 날짜 출력 폼 형태
// d = date
// type = "구분 값"
// showLevel = "어디까지 보여지는지"
function getDateType(
  d: string | Date = new Date(),
  type?: string | null,
  showLevel?: number
): string {
  const date = dateValidate(d);
  const temp =
    String(date.getFullYear()) +
    (type === null ? "" : type || ".") +
    String(date.getMonth() + 1).padStart(2, "0") +
    (type === null ? "" : type || ".") +
    String(date.getDate()).padStart(2, "0") +
    (showLevel && showLevel > 0
      ? " " + String(date.getHours()).padStart(2, "0")
      : "") +
    (showLevel && showLevel > 1
      ? ":" + String(date.getMinutes()).padStart(2, "0")
      : "");
  return temp;
}

// 오전 or 오후
function getTimeKr(time: string, type: string): string {
  let hour = Number(time.split(":")[0]);
  let min = Number(time.split(":")[1]);

  return (
    (hour > 12 ? "오후 " : "오전 ") +
    String(hour).padStart(2, "0") +
    (type ? type : " ") +
    String(min).padStart(2, "0")
  );
}

// 시작하는 날로 부터 남은 날
function getDateDiff(createdAt: string | Date): Object {
  const createdDate = dateValidate(createdAt);
  const milliSeconds = createdDate.getTime() - new Date().getTime();
  const seconds = milliSeconds / 1000;

  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const weeks = days / 7;
  const months = days / 30;
  const years = days / 365;

  return {
    seconds: Math.floor(seconds % 60),
    minutes: Math.floor(minutes % 60),
    hours: Math.floor(hours % 24),
    days: Math.floor(days),
    weeks: Math.floor(weeks),
    months: Math.floor(months),
    years: Math.floor(years),
  };
}

// 생성일이 현재로 부터 얼마나 지났는지
function getHourMinStrByMin(createdAt: string | Date): string {
  const createdDate = dateValidate(createdAt);
  const milliSeconds = new Date().getTime() - createdDate.getTime();
  const seconds = milliSeconds / 1000;
  if (seconds < 60) return `방금 전`;
  const minutes = seconds / 60;
  if (minutes < 60) return `${Math.floor(minutes)}분 전`;
  const hours = minutes / 60;
  if (hours < 24) return `${Math.floor(hours)}시간 전`;
  const days = hours / 24;
  if (days < 7) return `${Math.floor(days)}일 전`;
  const weeks = days / 7;
  if (weeks < 5) return `${Math.floor(weeks)}주 전`;
  const months = days / 30;
  if (months < 12) return `${Math.floor(months)}개월 전`;
  const years = days / 365;
  return `${Math.floor(years)}년 전`;
}

// 날짜 비교
function equalDate(
  targetDate: string | Date,
  compareDate: string | Date = new Date()
): boolean {
  if (String(targetDate).length === 10)
    compareDate = getDateType(compareDate, "-");
  const target = dateValidate(targetDate);
  const compare = dateValidate(compareDate);
  return (
    target.getFullYear() == compare.getFullYear() &&
    target.getMonth() == compare.getMonth() &&
    target.getDate() == compare.getDate()
  );
}
function compareDate(
  targetDate: string | Date,
  compareDate: string | Date = new Date()
): number {
  if (String(targetDate).length === 10)
    compareDate = getDateType(compareDate, "-");
  const target = dateValidate(targetDate);
  const compare = dateValidate(compareDate);
  if (target.getTime() < compare.getTime()) return -1;
  else if (equalDate(target, compare)) return 0;
  else return 1;
}

// 날짜 계산
function calculateDate(
  d: string | Date,
  value: number,
  type:
    | "FullYear"
    | "Month"
    | "Date"
    | "Hours"
    | "Minutes"
    | "Seconds"
    | "Milliseconds" = "Date"
): Date {
  let targetDate = new Date(d);
  const setMethodName = `set${type}` as keyof Date;
  const getMethodName = `get${type}` as keyof Date;
  return new Date(
    (targetDate[setMethodName] as Function)(
      (targetDate[getMethodName] as Function)() + value
    )
  );
}

export {
  getTimeKr,
  getDateType,
  getDateDiff,
  getHourMinStrByMin,
  formatDate,
  compareDate,
  calculateDate,
};

export default {
  getTimeKr,
  getDateType,
  getDateDiff,
  getHourMinStrByMin,
  formatDate,
  compareDate,
  calculateDate,
};
