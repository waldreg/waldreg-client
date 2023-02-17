import { NavLink } from "react-router-dom";
import styled from "styled-components";
import COLOR from "../../../constants/color";

const Wrapper = styled.div`
  min-width: 16rem;
  height: 100vh;
  padding: 1.5rem;

  background: ${COLOR.WHITE};
`;

const Top = styled.div`
  padding-bottom: 8vh;

  display: flex;
  justify-content: space-between;
`;

const Bottom = styled.div``;

const Links = styled.div`
  width: 100%;
  height: 80vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Items = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Item = styled.li<{ selected?: boolean }>`
  border-radius: 0.5rem;
  background: ${(props) => (props.selected ? COLOR.GREEN2 : COLOR.WHITE)};
`;

const BaseLink = styled.div`
  color: ${COLOR.GRAY3};
  padding: 0.8rem 0.5rem;

  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &:link {
    transition: 0.5s;
    text-decoration: none;
  }
  &:hover {
    background: ${COLOR.GREEN2};
    color: ${COLOR.BLACK} !important;
  }
`;

const Link = styled(NavLink)`
  color: ${COLOR.GRAY3} !important;
  padding: 0.8rem 0.5rem;

  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &:hover {
    background: ${COLOR.GREEN2};
    color: ${COLOR.BLACK} !important;
  }
`;

const Text = styled.div`
  width: 100%;
`;

const Blank = styled.div`
  width: 20px;
  height: 20px;
`;

export {
  Wrapper,
  Top,
  Bottom,
  Links,
  Items,
  Item,
  BaseLink,
  Link,
  Text,
  Blank,
};
