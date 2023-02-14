import { Params, useNavigate, useParams } from "react-router-dom";
import { useBoardDetail } from "./../../../hooks/board/useBoardDetail";
import {
  BoardButton,
  BoardButtonBox,
  BoardContainer,
  BoardContent,
  BoardInformation,
  BoardInformationBox,
  BoardTitle,
  BoardTopBox,
} from "./style";
import { useBoardDelete } from "./../../../hooks/board/useBoardDelete";
import FONT from "./../../../constants/fonts";

const BoardDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams<Params>();
  const { board } = useBoardDetail(id ? parseInt(id) : 0);

  const boardDelete = useBoardDelete(id ? parseInt(id) : 0);
  const handleDeleteButtonClick = () => {
    boardDelete.mutate();
    navigate(-1);
  };

  return (
    <>
      <BoardContainer>
        <BoardTitle style={FONT.SUBTITLE1}>{board?.title}</BoardTitle>
        <BoardTopBox>
          <BoardInformationBox>
            <BoardInformation style={FONT.SUBTITLE1}>ham0__0</BoardInformation>
            <BoardInformation style={FONT.SUBTITLE1}>
              작성일 : 2023.02.02
            </BoardInformation>
            <BoardInformation style={FONT.SUBTITLE1}>
              조회수 : 152
            </BoardInformation>
          </BoardInformationBox>
          <BoardButtonBox>
            <BoardButton
              style={FONT.SUBTITLE1}
              onClick={handleDeleteButtonClick}
            >
              수정
            </BoardButton>
            <BoardButton
              style={FONT.SUBTITLE1}
              onClick={handleDeleteButtonClick}
            >
              삭제
            </BoardButton>
          </BoardButtonBox>
        </BoardTopBox>
        <BoardContent style={FONT.BODY1}>{board?.content}</BoardContent>
      </BoardContainer>
    </>
  );
};

export default BoardDetail;
