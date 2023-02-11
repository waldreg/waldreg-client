import styled from "styled-components";
import COLOR from "../../../constants/color";

const Input = styled.input`
  width: 100%;
  height: 3rem;
  border: none;
  border-bottom: 0.2rem solid ${COLOR.GRAY0};
  margin-bottom: 2rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 20rem;
  border: 0.2rem solid ${COLOR.GRAY0};
  padding: 1rem;
  border-radius: 0.5rem;
  outline-color: ${COLOR.GRAY0};
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background: ${COLOR.GREEN4};
  color: ${COLOR.WHITE};
  border-radius: 0.5rem;
  width: 4.2rem;
  height: 2.5rem;
  border: none;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export { Input, TextArea, Button, ButtonContainer };
