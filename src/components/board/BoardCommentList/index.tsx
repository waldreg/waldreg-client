import { useCommentList } from "./../../../hooks/board/comment/useCommentList";
import { useParams } from "react-router";
import FONT from "./../../../constants/fonts";
import { useCommentDelete } from "./../../../hooks/board/comment/useCommentDelete";
import {
  CommentButton,
  CommentButtonBox,
  CommentContentBox,
  CommentDate,
  CommentDetail,
  CommentInformation,
  CommentUser,
} from "./style";
import useCurUser from "../../../hooks/curuser/useCurUser";

const BoardCommentList = () => {
  const { id } = useParams();

  const { commentLists } = useCommentList(parseInt(id!!), 1, 5);
  const commentDelete = useCommentDelete(parseInt(id!!));

  const currentUser = useCurUser();

  return (
    <div>
      {commentLists?.comments.map((comment) => (
        <CommentDetail key={comment.id}>
          <CommentInformation>
            <CommentUser style={FONT.SUBTITLE1}>{comment.name}</CommentUser>
            <CommentDate style={FONT.SUBTITLE1}>
              {comment.created_at.slice(0, 10)}
            </CommentDate>
          </CommentInformation>
          <CommentContentBox style={FONT.BODY1}>
            <div>{comment.content}</div>
            {currentUser!!.name === comment.name && (
              <CommentButtonBox>
                <CommentButton style={FONT.SUBTITLE1}>수정</CommentButton>
                <CommentButton
                  style={FONT.SUBTITLE1}
                  onClick={() => commentDelete.mutate(comment.id!!)}
                >
                  삭제
                </CommentButton>
              </CommentButtonBox>
            )}
          </CommentContentBox>
        </CommentDetail>
      ))}
    </div>
  );
};

export default BoardCommentList;
