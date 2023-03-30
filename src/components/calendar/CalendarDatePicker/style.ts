import styled from "styled-components";
import COLOR from "../../../constants/color";
import DatePicker from "react-datepicker";

const CalendarDateBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const CalendarDateSpan = styled.span`
  margin-right: 1rem;
  width: 3.2rem;
`;

const SDatePicker = styled(DatePicker)`
  box-sizing: border-box;
  padding: 0.3rem;
  border-radius: 0.2rem;
  border: 2px solid ${COLOR.GRAY1};
  font-size: 1rem;
  width: 9rem;
  cursor: pointer;
`;

export { CalendarDateBox, CalendarDateSpan, SDatePicker };
