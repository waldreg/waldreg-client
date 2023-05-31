import COLOR from "../../../constants/color";
import FONT from "../../../constants/fonts";
import { SearchIcon } from "../../Icons/BasicIcons";
import { UseInput } from "../../../interfaces/basic";
import styled from "styled-components";

export const InputFillThin = (props: UseInput) => {
  return (
    <SearchBarContainer theme={"thin"}>
      <SearchIcon />
      <Input
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        theme={"thin"}
        style={FONT.SUBTITLE2}
      />
    </SearchBarContainer>
  );
};

export const InputFillBold = (props: UseInput) => {
  return (
    <SearchBarContainer theme={"bold"}>
      <SearchIcon />
      <Input
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        theme={"bold"}
        style={FONT.SUBTITLE2}
        autoFocus
      />
    </SearchBarContainer>
  );
};

const SearchBarContainer = styled.div<{ theme: string }>`
  display: flex;
  align-items: center;
  gap:1rem;

  height: ${(props) => (props.theme === "thin" ? `3rem` : `3.4rem;`)};
  padding: 
  ${(props) =>
    props.theme === "thin" ? `0.75rem 0.75rem 0.75rem 1rem;` : `1rem;`}

  background: ${COLOR.GRAY1};
  border-radius: 0.6rem;
`;

const Input = styled.input<{ theme: string }>`
  width: 100%;

  border: 0;

  background: ${COLOR.GRAY1};

  font-size: 0.75rem;
`;
