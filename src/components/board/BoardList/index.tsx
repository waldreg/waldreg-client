import {
  BoardContainer,
  BoardContent,
  BoardContentBox,
  BoardInformation,
  BoardInformationBox,
  BoardTitle,
} from "./style";
import { useNavigate } from "react-router-dom";
import { BoardLists } from "../../../interfaces/board";
import FONT from "./../../../constants/fonts";
import { CommentIcon, ViewIcon } from "./../../Icons/BoardIcons";

interface BoardListProps {
  boardList: BoardLists;
}

function BoardList({ boardList }: BoardListProps) {
  const navigate = useNavigate();

  return (
    <>
      {boardList.boards.map((board) => (
        <BoardContainer
          key={board.id}
          onClick={() => navigate(`detail/${board.id}`)}
        >
          <BoardInformationBox>
            <BoardInformation style={FONT.SUBTITLE1}>ham0__0</BoardInformation>
            <BoardInformation style={FONT.SUBTITLE1}>
              2023.02.02
            </BoardInformation>
          </BoardInformationBox>
          <BoardContentBox>
            <BoardTitle style={FONT.SUBTITLE2}>{board.title}</BoardTitle>
            <BoardContent style={FONT.SUBTITLE2}>
              <CommentIcon />
              12
            </BoardContent>
            <BoardContent style={FONT.SUBTITLE2}>
              <ViewIcon />
              152
            </BoardContent>
          </BoardContentBox>
        </BoardContainer>
      ))}
    </>
  );
}

export default BoardList;
