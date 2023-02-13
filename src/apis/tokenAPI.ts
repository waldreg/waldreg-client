import { waldregAxios as axios } from "./axios";

interface TokenAPI {
  getToken: () => Promise<string>;
}

export const tokenAPI: TokenAPI = {
  async getToken() {
    const { data } = await axios.post("/token", {
      user_id: "Admin",
      user_password: "0000",
    });
    return data.access_token;
  },
};
