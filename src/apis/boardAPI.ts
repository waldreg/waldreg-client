// import { waldregAxios as axios } from "./axios";
// import { mockWaldregAxios as axios } from "./mockAxios";
import axios from "axios";

interface BoardAPI {
  getPostList: (category_id: number, from: number, to: number) => Promise<any>;
  getPost: (id: number) => Promise<any>;
  // createPost: (title: string) => Promise<any>;
  // updatePost: (id: string, title: string) => Promise<any>;
  // deletePost: (id: string) => Promise<void>;
}

export const boardAPI: BoardAPI = {
  // 전체 게시글 조회
  async getPostList(category_id: number, from: number, to: number) {
    const { data } = await axios.get(
      `https://6eacac33-f47e-4eea-b8e3-24568a2f0761.mock.pstmn.io/boards?category=${category_id}&from=${from}&to=${to}`
      // {
      //   headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      // }
    );
    // if (data.status !== 200) {
    //   throw new Error(data.message);
    // }
    return data.boards;
  },

  // 특정 게시글 조회
  async getPost(id: number) {
    const { data } = await axios.get(
      `https://6eacac33-f47e-4eea-b8e3-24568a2f0761.mock.pstmn.io/board/${id}`
    );
    // if (data.status !== 200) {
    //   throw new Error(data.message);
    // }
    return data;
  },

  // // 게시글 생성
  // async createPost(title: string) {
  //   const { data } = await axios.post(
  //     "/board",
  //     { title },
  //     {
  //       headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  //     }
  //   );
  //   return data;
  // },

  // // 게시글 수정
  // async updatePost(id: string, title: string) {
  //   const { data } = await axios.put(`/board/${id}`, { title });
  //   return data;
  // },

  // // 게시글 삭제
  // async deletePost(id: string) {
  //   const { data } = await axios.delete(`/board/${id}`);
  //   return data;
  // },
};
