import React from "react";
import { PostContainer } from "./style";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { boardDetailState } from "../../../states/board";
import { Post } from "../../../interfaces/board";

interface PostListProps {
  posts: Post[];
}

function PostList({ posts }: PostListProps) {
  const navigate = useNavigate();
  const setBoardDetail = useSetRecoilState(boardDetailState);

  const handlePostClick = (e: React.MouseEvent) => {
    const post = e.currentTarget.firstChild?.textContent;
    setBoardDetail(post);
    navigate(`/board/${post}`);
  };

  return (
    <div>
      {posts.map((post) => (
        <PostContainer key={post.id} onClick={handlePostClick}>
          <div>{post.id}</div>
          <div>{post.title}</div>
          <div>{post.category}</div>
          {/* <Post>{post.author.name}</Post>
          <Post>{post.created_at}</Post>
          <Post>{post.last_modifed_at}</Post> */}
        </PostContainer>
      ))}
    </div>
  );
}

export default PostList;
