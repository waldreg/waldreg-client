import { waldregAxios as axios } from "./axios";
import { NewUser } from "../types/auth";

export const authAPI = (() => {
  const signup = async (newUser: NewUser) => {
    await axios.post("/user", newUser);
  };

  return {
    signup,
  };
})();
