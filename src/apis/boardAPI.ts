import axios from "axios";
import { Post } from "../interfaces/board";

interface BoardAPI {
  getPostList: () => Promise<Post[]>; // 전체 게시글 조회
  getPost: (id: number) => Promise<Post>; // 특정 게시글 조회
  createPost: (post: Post) => Promise<void>; // 게시글 작성
  updatePost: (id: number) => Promise<Post>; // 게시글 수정
  deletePost: (id: number) => Promise<void>; // 게시글 삭제
}

export const boardAPI: BoardAPI = {
  async getPostList() {
    const { data } = await axios.get(
      // `/boards?category=${category_id}&from=${from}&to=${to}`
      "http://localhost:8001/boards"
    );
    return data;
  },

  async getPost(id: number) {
    const { data } = await axios.get(
      // `/board/${id}`
      `http://localhost:8001/boards/${id}`
    );
    return data;
  },

  async createPost(post: Post) {
    const { data } = await axios.post(
      // `/board`
      "http://localhost:8001/boards",
      post
    );
    return data;
  },

  async updatePost(id: number) {
    const { data } = await axios.post(
      // `/board/${id}`
      `http://localhost:8001/boards/${id}`
    );
    return data;
  },

  async deletePost(id: number) {
    const { data } = await axios.delete(
      // `/board/${id}`
      `http://localhost:8001/boards/${id}`
    );
    return data;
  },
};
