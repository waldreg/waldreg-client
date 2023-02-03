import axios from "axios";

interface CategoryAPI {
  getBoardCategories: () => Promise<any>;
}

export const categoryAPI: CategoryAPI = {
  // 게시판 카테고리 조회
  async getBoardCategories() {
    const { data } = await axios.get("http://localhost:8001/category");
    return data.categories;
  },
};
