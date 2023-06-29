import { useNavigate } from "react-router-dom";
import FONT from "../../../constants/fonts";
import { BoardList, BoardListText } from "./style";
import { ListIcon } from "../../Icons/BoardIcons";

function BoardListButton() {
  const navigate = useNavigate();

  return (
    <BoardList style={FONT.SUBTITLE1} onClick={() => navigate(-1)}>
      <ListIcon />
      <BoardListText>목록</BoardListText>
    </BoardList>
  );
}

export default BoardListButton;
