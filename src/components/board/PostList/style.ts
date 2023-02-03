import styled from "styled-components";
import COLOR from "../../../constants/color";

const PostContainer = styled.div`
  display: flex;
  border-top: 2px solid ${COLOR.GRAY1};
  padding: 1.4rem 0;
  cursor: pointer;
`;

const Post = styled.div`
  color: ${COLOR.GRAY5};
  margin-right: 1.4rem;
`;

export { PostContainer, Post };
