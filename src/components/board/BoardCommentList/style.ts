import styled from "styled-components";
import COLOR from "../../../constants/color";

const CommentDetail = styled.div`
  padding: 0.5rem 0;
`;

const CommentInformation = styled.div`
  display: flex;
  margin-bottom: 0.25rem;
  color: ${COLOR.GRAY3};
`;

const CommentUser = styled.div`
  margin-right: 1rem;
`;

const CommentDate = styled.div``;

const CommentContentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CommentContent = styled.div``;

const CommnetUpdateBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CommnetUpdateTextarea = styled.textarea`
  width: 100%;
  height: 4rem;
  resize: none;
  outline: none;
  border: 2px solid ${COLOR.GRAY0};
  border-radius: 0.5rem;
  padding: 0.5rem 0.7rem;
`;

const CommentButtonBox = styled.div`
  display: flex;
`;

const CommentButton = styled.button`
  width: 2rem;
  cursor: pointer;
  margin-left: 1rem;
  color: ${COLOR.GRAY3};
`;

export {
  CommentDetail,
  CommentInformation,
  CommentUser,
  CommentDate,
  CommentContentBox,
  CommentContent,
  CommnetUpdateTextarea,
  CommnetUpdateBox,
  CommentButtonBox,
  CommentButton,
};
