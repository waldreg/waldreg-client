import { SearchIcon } from "../../Icons/BoardIcons";
import { SearchButton, SearchText } from "./style";

interface ButtonProps {
  onClick: () => void;
}

const BoardSearchButton = ({ onClick }: ButtonProps) => {
  return (
    <SearchButton onClick={onClick}>
      <SearchIcon />
      <SearchText>검색</SearchText>
    </SearchButton>
  );
};

export default BoardSearchButton;
