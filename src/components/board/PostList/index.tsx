import React from "react";
import { PostLists } from "../../../interfaces/board";
import { Post, PostContainer } from "./style";
import { useNavigate } from "react-router-dom";

interface PostListProps {
  posts: PostLists[];
}

function PostList({ posts }: PostListProps) {
  const navigate = useNavigate();

  const handlePostClick = (e: React.MouseEvent) => {
    console.log(e.currentTarget.firstChild?.textContent);
    navigate(`/board/${e.currentTarget.firstChild?.textContent}`);
  };

  return (
    <div>
      {posts.map((post) => (
        <PostContainer key={post.id} onClick={handlePostClick}>
          <Post>{post.id}</Post>
          <Post>{post.title}</Post>
          <Post>{post.author.name}</Post>
          <Post>{post.created_at}</Post>
          <Post>{post.created_at}</Post>
        </PostContainer>
      ))}
    </div>
  );
}

export default PostList;
