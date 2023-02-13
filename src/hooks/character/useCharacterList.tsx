import { useQuery } from 'react-query';

import { waldregAxios } from '../../apis/axios';
import { ICharacter } from '../../interfaces/character';
import { characterKeys } from '../../types/settingKeys';

const getCharacterList = async () => {
  const response = await waldregAxios.get('/character');
  return response.data.characters;
};

const useCharacterList = () => {
  const { data } = useQuery<ICharacter[]>(characterKeys.all, () =>
    getCharacterList()
  );
  return data;
};

export default useCharacterList;
