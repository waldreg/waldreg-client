import { waldregAxios } from './axios';

export const userAPI = {
  async getUser(userId: string) {
    try {
      const response = await waldregAxios.get(`/user/${userId}`);
    } catch (error) {
      console.log(error);
    }
  },
  async getUserList(startIdx: number, endIdx: number) {
    try {
      const response = await waldregAxios.get(
        `/users?from=${startIdx}&to=${endIdx}`
      );
    } catch (error) {
      console.log(error);
    }
  },
  async editUserChar(id: number, newChar: string) {
    try {
      const response = await waldregAxios.put(`/user/character/${id}`, {
        character: newChar,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
