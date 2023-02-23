import { Params, useNavigate, useParams } from "react-router-dom";
import { useBoardDetail } from "./../../../hooks/board/useBoardDetail";
import {
  BoardButton,
  BoardButtonBox,
  BoardCommentCount,
  BoardContainer,
  BoardContent,
  BoardInformation,
  BoardInformationBox,
  BoardTitle,
  BoardTopBox,
} from "./style";
import { useBoardDelete } from "./../../../hooks/board/useBoardDelete";
import FONT from "./../../../constants/fonts";
import BoardCommentCreate from "./../BoardCommentCreate/index";
import BoardCommentList from "./../BoardCommentList/index";
import { useCommentList } from "../../../hooks/board/comment/useCommentList";

const BoardDetail = () => {
  const navigate = useNavigate();
  const { id, categoryId } = useParams<Params>();
  const { board } = useBoardDetail(parseInt(id!!));

  const handleUpdateButtonClick = () => {
    navigate(`/board/${categoryId}/update/${id}`);
  };

  const boardDelete = useBoardDelete(parseInt(id!!));
  const handleDeleteButtonClick = () => {
    boardDelete.mutate();
    navigate(-1);
  };

  const { commentLists } = useCommentList(parseInt(id!!), 1, 4);

  return (
    <>
      <BoardContainer>
        <BoardTitle style={FONT.SUBTITLE1}>{board?.title}</BoardTitle>
        <BoardTopBox>
          <BoardInformationBox>
            <BoardInformation style={FONT.SUBTITLE1}>
              {board?.author.name}
            </BoardInformation>
            <BoardInformation style={FONT.SUBTITLE1}>
              작성일 : {board?.created_at.slice(0, 10)}
            </BoardInformation>
            {board?.created_at !== board?.last_modified_at && (
              <BoardInformation style={FONT.SUBTITLE1}>
                수정일 : {board?.last_modified_at.slice(0, 10)}
              </BoardInformation>
            )}
            <BoardInformation style={FONT.SUBTITLE1}>
              조회수 : {board?.views}
            </BoardInformation>
          </BoardInformationBox>
          <BoardButtonBox>
            <BoardButton
              style={FONT.SUBTITLE1}
              onClick={handleUpdateButtonClick}
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

        <BoardCommentCount style={FONT.SUBTITLE2}>
          {commentLists?.max_idx}개의 댓글
        </BoardCommentCount>
        <BoardCommentCreate />
        <BoardCommentList />
      </BoardContainer>
    </>
  );
};

export default BoardDetail;
