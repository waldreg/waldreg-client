import { waldregAxios } from './axios';
import { ICharacter, IPermission } from '../interfaces/character';

interface ICharacterAPI {
  getPermissionList: () => Promise<IPermission[]>;
  getCharacterList: () => Promise<ICharacter[]>;
  getCharacter: (name: string) => Promise<ICharacter>;
  createCharacter: (newChar: ICharacter) => Promise<void>;
  editCharacter: ({
    name,
    newChar,
  }: {
    name: string;
    newChar: {
      character_name: string;
      permissions: IPermission[];
    };
  }) => Promise<void>;
  delCharacter: (name: string) => Promise<void>;
}

export const characterAPI: ICharacterAPI = {
  async getPermissionList() {
    const response = await waldregAxios.get('/permission');
    return response.data.permissions;
  },

  async getCharacterList() {
    const response = await waldregAxios.get('/character');
    return response.data.characters;
  },

  async getCharacter(name: string) {
    const response = await waldregAxios.get(`/character/${name}`);
    return response.data;
  },

  async createCharacter(newChar: ICharacter) {
    await waldregAxios.post('/character', newChar);
  },

  async editCharacter({
    name,
    newChar,
  }: {
    name: string;
    newChar: {
      character_name: string;
      permissions: IPermission[];
    };
  }) {
    await waldregAxios.patch(`/character/${name}`, newChar);
  },

  async delCharacter(name: string) {
    await waldregAxios.delete(`/character/${name}`);
  },
};
