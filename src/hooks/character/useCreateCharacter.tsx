import { useMutation, useQueryClient } from 'react-query';

import { waldregAxios } from '../../apis/axios';
import { Character } from '../../interfaces/character';
import { characterKeys } from '../../types/settingKeys';

import useApiError from '../error/useApiError';

const createCharacter = async (newChar: Character) => {
  await waldregAxios.post('/character', newChar);
};

const useCreateCharacter = () => {
  const queryClient = useQueryClient();
  const { handleError } = useApiError();

  return useMutation(createCharacter, {
    onSuccess: () => {
      queryClient.invalidateQueries(characterKeys.all);
    },
    onError: (error: any) => {
      handleError(error);
    },
  });
};

export default useCreateCharacter;
