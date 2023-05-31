import COLOR from "../../../constants/color";
import styled from "styled-components";

export const Top = styled.div`
  width: 100%;
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
`;

export const Description = styled.h2`
  color: ${COLOR.GRAY5};
`;

export const Contents = styled.main`
  display: flex;
  justify-content: center;
  align-items: start;

  height: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  width: 20rem;
`;

export const CheckBox = styled.input<{ checked: boolean }>`
  width: 25px;
  height: 25px;

  border: 2px solid
    ${(props) =>
      props.checked === true ? `${COLOR.GREEN4}` : `${COLOR.GRAY2}`};
  border-radius: 0.5rem;

  background: ${(props) =>
    props.checked === true ? `${COLOR.GREEN4}` : "white"};

  cursor: pointer;
`;
