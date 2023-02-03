import axios from "axios";

interface CategoryAPI {
  getBoardCategories: () => Promise<any>;
}

export const categoryAPI: CategoryAPI = {
  // 게시판 카테고리 조회
  async getBoardCategories() {
    const { data } = await axios.get(
      "https://6eacac33-f47e-4eea-b8e3-24568a2f0761.mock.pstmn.io/category"
    );
    return data.categories;
  },
};
