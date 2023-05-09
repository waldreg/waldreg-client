import styled from "styled-components";

const CalendarHeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const CalendarHeaderLeft = styled.div`
  display: flex;
  span {
    margin-right: 0.3rem;
  }
`;

const CalendarToday = styled.span`
  cursor: pointer;
`;

const CalendarHeaderRight = styled.div``;

const CalendarHeaderArrow = styled.span`
  cursor: pointer;
  margin: 0 0.5rem;
`;

export {
  CalendarHeaderStyle,
  CalendarHeaderLeft,
  CalendarHeaderRight,
  CalendarHeaderArrow,
  CalendarToday,
};
