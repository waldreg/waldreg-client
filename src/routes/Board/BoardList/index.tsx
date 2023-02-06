import { BoardButtonContainer, BoardContainer, Container } from "./style";
import PostMenu from "../../../components/board/PostMenu";
import PostList from "../../../components/board/PostList";
import PostCreateButton from "../../../components/board/PostCreateButton";
import PageTitle from "./../../../components/common/PageTitle/index";
import { usePostList } from "./../../../hooks/board/usePostList";

function BoardList() {
  const { posts } = usePostList();

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
