import { CalendarDate } from "./style";

const CalendarDays = () => {
  const days = [];
  const date = ["일", "월", "화", "수", "목", "금", "토"];
  for (let i = 0; i < 7; i++) {
    days.push(<div key={i}>{date[i]}</div>);
  }
  return <CalendarDate>{days}</CalendarDate>;
};

export default CalendarDays;
