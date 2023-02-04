import { useState } from "react";
import { BoardButtonContainer, BoardContainer, Container } from "./style";
import { useQuery } from "react-query";
import PostMenu from "../../../components/board/PostMenu";
import PostList from "../../../components/board/PostList";
import PostCreateButton from "../../../components/board/PostCreateButton";
import PageTitle from "./../../../components/common/PageTitle/index";
import { boardAPI } from "../../../apis/boardAPI";

function BoardList() {
  const [categoryId, setCategoryId] = useState(1);
  const [from, setFrom] = useState(1);
  const [to, setTo] = useState(2);

  const { data: posts } = useQuery(
    "posts",
    () => boardAPI.getPostList(categoryId, from, to),
    {
      onSuccess: (data) => {
        console.log("게시글 전체 가져오기 성공");
      },
      onError: () => {
        console.log("게시글 전체 가져오기 실패");
      },
    }
  );

  return (
    <Container>
      <PageTitle>공지사항</PageTitle>
      <BoardContainer>
        <PostMenu />
        {posts && <PostList posts={posts} />}
      </BoardContainer>
      <BoardButtonContainer>
        <PostCreateButton />
      </BoardButtonContainer>
    </Container>
  );
}

export default BoardList;
