import axios from "axios";

interface BoardAPI {
  getPostList: (category_id: number, from: number, to: number) => Promise<any>;
  getPost: (id: number) => Promise<any>;
  createPost: () => Promise<any>;
  updatePost: (id: number) => Promise<any>;
  deletePost: (id: number) => Promise<void>;
}

export const boardAPI: BoardAPI = {
  // 전체 게시글 조회
  async getPostList(category_id: number, from: number, to: number) {
    const { data } = await axios.get(
      // `/boards?category=${category_id}&from=${from}&to=${to}`
      "http://localhost:8001/boards"
    );
    return data;
  },

  // 특정 게시글 조회
  async getPost(id: number) {
    const { data } = await axios.get(
      // `/board/${id}`
      `http://localhost:8001/boards/${id}`
    );
    return data;
  },

  // 게시글 삭제
  async deletePost(id: number) {
    const { data } = await axios.delete(
      // `/board/${id}`
      `http://localhost:8001/boards/${id}`
    );
    return data;
  },
};
