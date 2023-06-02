import { useQuery } from 'react-query';

import { waldregAxios } from '../../apis/axios';
import { Character } from '../../interfaces/character';
import { characterKeys } from '../../types/settingKeys';
import useApiError from '../error/useApiError';

const getCharacter = async (name: string) => {
  const response = await waldregAxios.get(`/character/${name}`);
  return response.data;
};

const useCharacter = (name: string) => {
  const { handleError } = useApiError();

  const { data } = useQuery<Character>(
    characterKeys.detail(name),
    () => getCharacter(name),
    {
      onError: (error: any) => {
        handleError(error);
      },
    }
  );
  return data;
};

export default useCharacter;
