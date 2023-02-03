import React from "react";
import { useMutation } from "react-query";
import { boardAPI } from "../../../apis/boardAPI";
import { Post } from "../../../interfaces/board";
import { useRecoilValue } from "recoil";
import { boardDetailState } from "../../../states/board";
import { useNavigate } from "react-router-dom";

interface PostDetailProps {
  post: Post;
}

const PostDetail = ({ post }: PostDetailProps) => {
  const postDetail = useRecoilValue(boardDetailState);
  const navigate = useNavigate();

  const deleteMutation = useMutation(() => boardAPI.deletePost(postDetail), {
    onSuccess: () => {
      console.log("게시글 삭제 성공");
    },
    onError: () => {
      console.log("게시글 삭제 실패");
    },
  });

  const handleDeleteButtonClick = () => {
    deleteMutation.mutate(postDetail);
    navigate(`/board`);
  };

  return (
    <>
      <div>{post.id}</div>
      <div>{post.title}</div>
      <div>{post.category}</div>
      <div>{post.content}</div>
      <div>{post.author.user_id}</div>
      <div>{post.author.name}</div>
      <div>작성일: {post.created_at}</div>
      <div>수정일: {post.last_modifed_at}</div>

      <button onClick={handleDeleteButtonClick}>삭제</button>
      <button>수정</button>
    </>
  );
};

export default PostDetail;
