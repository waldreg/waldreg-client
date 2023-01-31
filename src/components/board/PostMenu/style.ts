import styled from "styled-components";
import COLOR from "./../../../constants/color";

const MenuUl = styled.ul`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
`;

const MenuLi = styled.li`
  color: ${COLOR.GRAY3};
  width: ${(props: { width: string }) => props.width};
`;

export { MenuUl, MenuLi };
