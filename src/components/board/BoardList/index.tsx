import {
  BoardContainer,
  BoardContent,
  BoardContentBox,
  BoardInformation,
  BoardInformationBox,
  BoardInformationText,
  BoardLeft,
  BoardRight,
  BoardTitle,
} from "./style";
import { useNavigate } from "react-router-dom";
import { BoardLists } from "../../../interfaces/board";
import FONT from "./../../../constants/fonts";
import {
  AttachmentIcon,
  CommentIcon,
  ViewIcon,
} from "./../../Icons/BoardIcons";

interface BoardListProps {
  boardList: BoardLists;
}

function BoardList({ boardList }: BoardListProps) {
  const navigate = useNavigate();

  return (
    <>
      {boardList?.boards &&
        boardList.boards
          .slice()
          .reverse()
          .map((board) => (
            <BoardContainer
              key={board.id}
              onClick={() => navigate(`detail/${board.id}`)}
            >
              <BoardLeft>
                <BoardInformationBox>
                  <BoardInformation style={FONT.SUBTITLE1}>
                    {board.author.name}
                  </BoardInformation>
                  <BoardInformation style={FONT.SUBTITLE1}>
                    {board.created_at.slice(0, 10)}
                  </BoardInformation>
                </BoardInformationBox>
                <BoardContentBox>
                  <BoardTitle style={FONT.SUBTITLE2}>{board.title}</BoardTitle>
                  <BoardContent style={FONT.SUBTITLE2}>
                    <CommentIcon />
                    {board.comment_count}
                  </BoardContent>

                  <BoardContent style={FONT.SUBTITLE2}>
                    <ViewIcon />
                    <BoardInformationText>{board.views}</BoardInformationText>
                  </BoardContent>
                </BoardContentBox>
              </BoardLeft>

              <BoardRight>
                {(board.images && board.images.length > 0) ||
                (board.files && board.files.length > 0) ? (
                  <AttachmentIcon />
                ) : null}
              </BoardRight>
            </BoardContainer>
          ))}
    </>
  );
}

export default BoardList;
