import { useMutation, useQueryClient } from 'react-query';

import { waldregAxios } from '../../apis/axios';
import { Character } from '../../interfaces/character';
import { characterKeys } from '../../types/settingKeys';

const createCharacter = async (newChar: Character) => {
  await waldregAxios.post('/character', newChar);
};

const useCreateCharacter = () => {
  const queryClient = useQueryClient();
  return useMutation(createCharacter, {
    onSuccess: () => {
      queryClient.invalidateQueries(characterKeys.all);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export default useCreateCharacter;
