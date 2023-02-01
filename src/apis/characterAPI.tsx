import { waldregAxios } from './axios';
import { ICharacter } from '../interfaces/character';

export const characterAPI = {
  async getPermissionList() {
    const response = await waldregAxios.get('/permission');
    return response.data.permissions;
  },

  async getCharacterList() {
    const response = await waldregAxios.get('/character');
    return response.data.characters;
  },

  async createCharacter(newChar: ICharacter) {
    console.log(newChar);
    try {
      const response = await waldregAxios.post('/character', newChar);
    } catch (error) {
      console.log(error);
    }
  },

  async getCharacter(name: string) {
    try {
      const response = await waldregAxios.get(`/character/${name}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  async editCharacter(id: number, newChar: ICharacter) {
    try {
      const response = await waldregAxios.patch(`/character/${id}`, {
        newChar,
      });
    } catch (error) {
      console.log(error);
    }
  },

  async delCharacter(id: number) {
    try {
      const response = await waldregAxios.delete(`/character/${id}`);
    } catch (error) {
      console.log(error);
    }
  },
};
