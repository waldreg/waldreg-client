import { waldregAxios as axios } from "./axios";
import { NewUser } from "../types/auth";

export const authAPI = (() => {
  const signup = async (newUser: NewUser) => {
    await axios.post("/user", newUser);
  };

  const login = async (user_id: string, user_password: string) => {
    const { data } = await axios.post("/token", {
      user_id,
      user_password,
    });
    return data;
  };

  return {
    signup,
    login,
  };
})();
