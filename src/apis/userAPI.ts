import { waldregAxios } from './axios';

export const userAPI = {
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
