import { waldregAxios } from './axios';
import { ICharacter } from '../interfaces/character';

export const characterAPI = {
  async getPermission() {
    try {
      const response = await waldregAxios.get('/permission');
    } catch (error) {
      console.log(error);
    }
  },
  async createCharacter(newChar: ICharacter) {
    try {
      const response = await waldregAxios.post('/character', { newChar });
    } catch (error) {
      console.log(error);
    }
  },
  async getCharacter(id: number) {
    try {
      const response = await waldregAxios.post(`/character/${id}`);
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

export const fetchCharacterList = async () => {
  const response = await waldregAxios.get('/character');
  return response.data.character_name;
};
