import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import relativeTime from "dayjs/plugin/relativeTime";

// 플러그인 적용
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);

// 기본 로케일 설정
dayjs.locale("ko");

// 기본 날짜 포맷 설정
export function getLocaleData(date: dayjs.Dayjs) {
  return date.format("YYYY-MM-DD");
}

export default dayjs;
