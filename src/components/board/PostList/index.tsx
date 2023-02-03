import React from "react";
import { Posts } from "../../../interfaces/board";
import { Post, PostContainer } from "./style";
import { useNavigate } from "react-router-dom";

interface PostListProps {
  posts: Posts[];
}

const PostList = ({ posts }: PostListProps) => {
  const navigate = useNavigate();

  const handlePostClick = (e: React.MouseEvent) => {
    console.log(e.currentTarget.firstChild?.textContent);
    navigate(`/board/${e.currentTarget.firstChild?.textContent}`);
  };

  return (
    <div>
      {posts.map((post) => (
        <PostContainer key={post.id} onClick={handlePostClick}>
          <Post width={"10%"}>{post.id}</Post>
          <Post width={"40%"}>{post.title}</Post>
          <Post width={"10%"}>{post.author.name}</Post>
          <Post width={"10%"}>{post.created_at}</Post>
          <Post width={"10%"}>{post.created_at}</Post>
        </PostContainer>
      ))}
    </div>
  );
};

export default PostList;
