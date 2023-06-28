import styled from "styled-components";
import COLOR from "../../../constants/color";

const Button = styled.button`
  display: flex;
  align-items: center;
  background: ${COLOR.GREEN4};
  color: ${COLOR.WHITE};
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin-left: 0.5rem;
`;

const ButtonText = styled.div`
  margin-left: 0.45rem;
`;

export { Button, ButtonText };
