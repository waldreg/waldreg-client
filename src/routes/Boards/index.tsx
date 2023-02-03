import { useState } from "react";
import { BoardButtonContainer, BoardContainer, Container } from "./style";
import { useQuery } from "react-query";
import { boardAPI } from "../../apis/boardAPI";
import PostMenu from "../../components/board/PostMenu";
import PostList from "../../components/board/PostList";
import { tokenAPI } from "../../apis/tokenAPI";
import BoardTitle from "../../components/common/PageTitle/index";
import PostCreateButton from "../../components/common/CreateButton";

function Boards() {
  const [categoryId, setCategoryId] = useState(1);
  const [from, setFrom] = useState(1);
  const [to, setTo] = useState(2);

  const { data: token } = useQuery("token", () => tokenAPI.getToken(), {
    onSuccess: (data) => {
      localStorage.setItem("token", data);
      console.log("토큰 가져오기 성공");
    },
    onError: () => {
      console.log("토큰 가져오기 실패");
    },
  });

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
      <BoardTitle>공지사항</BoardTitle>
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

export default Boards;
