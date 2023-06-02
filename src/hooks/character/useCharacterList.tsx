import { useQuery } from 'react-query';

import { waldregAxios } from '../../apis/axios';
import { Character } from '../../interfaces/character';
import { characterKeys } from '../../types/settingKeys';

import useApiError from '../error/useApiError';

const getCharacterList = async () => {
  const response = await waldregAxios.get('/character');
  return response.data.characters;
};

const useCharacterList = () => {
  const { handleError } = useApiError();

  const { data } = useQuery<Character[]>(
    characterKeys.all,
    () => getCharacterList(),
    {
      onError: (error: any) => {
        handleError(error);
      },
    }
  );
  return data;
};

export default useCharacterList;
