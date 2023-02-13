import axios from "axios";
import { Board } from "../interfaces/board";

interface BoardAPI {
  getBoardList: () => Promise<Board[]>; // 전체 게시글 조회
  getBoard: (id: number) => Promise<Board>; // 특정 게시글 조회
  createBoard: (Board: Board) => Promise<void>; // 게시글 작성
  updateBoard: (id: number) => Promise<Board>; // 게시글 수정
  deleteBoard: (id: number) => Promise<void>; // 게시글 삭제
}

export const boardAPI: BoardAPI = {
  async getBoardList() {
    const { data } = await axios.get(
      // `/boards?category=${category_id}&from=${from}&to=${to}`
      "http://localhost:8001/boards"
    );
    return data;
  },

  async getBoard(id: number) {
    const { data } = await axios.get(
      // `/board/${id}`
      `http://localhost:8001/boards/${id}`
    );
    return data;
  },

  async createBoard(board: Board) {
    const { data } = await axios.post(
      // `/board`
      "http://localhost:8001/boards",
      board
    );
    return data;
  },

  async updateBoard(id: number) {
    const { data } = await axios.post(
      // `/board/${id}`
      `http://localhost:8001/boards/${id}`
    );
    return data;
  },

  async deleteBoard(id: number) {
    const { data } = await axios.delete(
      // `/board/${id}`
      `http://localhost:8001/boards/${id}`
    );
    return data;
  },
};
