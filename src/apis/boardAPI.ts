import axios from "axios";

interface BoardAPI {
  getPostList: (category_id: number, from: number, to: number) => Promise<any>;
  getPost: (id: number) => Promise<any>;
}

export const boardAPI: BoardAPI = {
  // 전체 게시글 조회
  async getPostList(category_id: number, from: number, to: number) {
    const { data } = await axios.get(
      `https://6eacac33-f47e-4eea-b8e3-24568a2f0761.mock.pstmn.io/boards?category=${category_id}&from=${from}&to=${to}`
    );
    return data.boards;
  },

  // 특정 게시글 조회
  async getPost(id: number) {
    const { data } = await axios.get(
      `https://6eacac33-f47e-4eea-b8e3-24568a2f0761.mock.pstmn.io/board/${id}`
    );
    return data;
  },
};
