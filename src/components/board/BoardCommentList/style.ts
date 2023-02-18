import styled from "styled-components";
import COLOR from "../../../constants/color";

const CommentDetail = styled.div`
  padding: 1rem 0;
`;

const CommentInformation = styled.div`
  display: flex;
  margin-bottom: 1rem;
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

const CommentButtonBox = styled.div`
  display: flex;
  color: ${COLOR.GRAY3};
`;

const CommentButton = styled.button`
  cursor: pointer;
  margin-left: 1rem;
`;

export {
  CommentDetail,
  CommentInformation,
  CommentUser,
  CommentDate,
  CommentContentBox,
  CommentContent,
  CommentButtonBox,
  CommentButton,
};
