import { waldregAxios } from './axios';
import { ICharacter, IPermission } from '../interfaces/character';

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
    const response = await waldregAxios.get(`/character/${name}`);
    return response.data;
  },

  async editCharacter(
    name: string,
    newChar: { character_name: string; permissions: IPermission[] }
  ) {
    const response = await waldregAxios.patch(`/character/${name}`, newChar);
    return response;
  },

  async delCharacter(name: string) {
    const response = await waldregAxios.delete(`/character/${name}`);
    return response;
  },
};
