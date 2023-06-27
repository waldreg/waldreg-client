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
  CommnetUpdateBox,
  CommnetUpdateTextarea,
} from "./style";
import useCurUser from "../../../hooks/curuser/useCurUser";
import { useState } from "react";
import { useCommentUpdate } from "../../../hooks/board/comment/useCommentUpdate";

const BoardCommentList = () => {
  const { id } = useParams();
  const currentUser = useCurUser();

  const { commentLists } = useCommentList(parseInt(id!!), 1, 99);
  const commentDelete = useCommentDelete(parseInt(id!!));

  const [commentUpdate, setCommentUpdate] = useState<boolean[]>([]);
  const [commentContent, setCommentContent] = useState("");
  const [commentId, setCommentId] = useState<number>(0);

  const handleCommentUpdateToggle = (comment_id: number) => {
    const updatedCommentUpdate = [...commentUpdate];
    updatedCommentUpdate[comment_id] = !updatedCommentUpdate[comment_id];
    setCommentUpdate(updatedCommentUpdate);
    setCommentId(comment_id);
  };

  const updateMutation = useCommentUpdate(commentId, commentContent);

  const handleUpdateSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    updateMutation.mutate();
    setCommentContent("");
  };

  return (
    <>
      {commentLists?.comments
        .slice()
        .reverse()
        .map((comment) => (
          <CommentDetail key={comment.id}>
            <CommentInformation>
              <CommentUser style={FONT.SUBTITLE1}>{comment.name}</CommentUser>
              <CommentDate style={FONT.SUBTITLE1}>
                {comment.created_at.slice(0, 10)}
              </CommentDate>
            </CommentInformation>
            <CommentContentBox style={FONT.BODY1}>
              {commentUpdate[comment.id!!] ? (
                <CommnetUpdateBox>
                  <CommnetUpdateTextarea
                    value={commentContent || comment.content}
                    onChange={(e) => {
                      setCommentContent(e.target.value);
                    }}
                  ></CommnetUpdateTextarea>
                  <CommentButton
                    onClick={(e) => {
                      handleCommentUpdateToggle(comment.id!!);
                      handleUpdateSubmit(e);
                    }}
                    style={FONT.SUBTITLE1}
                  >
                    완료
                  </CommentButton>
                </CommnetUpdateBox>
              ) : (
                <>
                  <div>{comment.content}</div>
                  {currentUser!!.name === comment.name && (
                    <CommentButtonBox>
                      <CommentButton
                        onClick={() => handleCommentUpdateToggle(comment.id!!)}
                        style={FONT.SUBTITLE1}
                      >
                        수정
                      </CommentButton>
                      <CommentButton
                        style={FONT.SUBTITLE1}
                        onClick={() => commentDelete.mutate(comment.id!!)}
                      >
                        삭제
                      </CommentButton>
                    </CommentButtonBox>
                  )}
                </>
              )}
            </CommentContentBox>
          </CommentDetail>
        ))}
    </>
  );
};

export default BoardCommentList;
