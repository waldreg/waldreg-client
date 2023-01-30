import React, { useEffect, useState } from "react";
import { BoardContainer, Container } from "./style";
import { useQuery, useQueryClient } from "react-query";
import { boardAPI } from "../../apis/boardAPI";
import PostMenu from "../../components/board/PostMenu";
import PostList from "../../components/board/PostList";
import { tokenAPI } from "../../apis/tokenAPI";

const maxPostPage = 10;

function Board() {
  const [currentPage, setCurrentPage] = useState(1);

  // 쿼리 클라이언트를 가져오면 prefetchQuery를 사용 가능
  const queryClient = useQueryClient();

  // 토큰 가져오기
  const { data: token } = useQuery("token", () => tokenAPI.getToken(), {
    onError: () => {
      console.log("토큰 가져오기 실패");
    },
  });

  // useEffect(() => {
  //   if (currentPage < maxPostPage) {
  //     const nextPage = currentPage + 1;
  //     setCurrentPage(nextPage);
  //     // 다음 페이지 쿼리를 미리 실행하고 캐시에 저장
  //     queryClient.prefetchQuery(["posts", nextPage], () =>
  //       boardAPI.getPostList(nextPage)
  //     );
  //   }
  // }, [currentPage, queryClient]);

  // const { data: posts } = useQuery(
  //   ["posts", currentPage],
  //   () => boardAPI.getPostList(currentPage),
  //   {
  //     staleTime: 1000, // 1초마다 만료
  //     keepPreviousData: true, // 쿼리키가 바뀔 때도 지난 데이터 유지해서 캐시에 해당 데이터 있도록
  //   }
  // );

  return (
    <Container>
      <div>공지사항</div>
      <BoardContainer>
        <PostMenu />
        {token && <div>${token}</div>}
        {/* {posts && <PostList posts={posts} />} */}
      </BoardContainer>
    </Container>
  );
}

export default Board;
