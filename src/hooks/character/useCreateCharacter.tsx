import { useMutation, useQueryClient } from 'react-query';

import { waldregAxios } from '../../apis/axios';
import { ICharacter } from '../../interfaces/character';
import { characterKeys } from '../../types/settingKeys';

const createCharacter = async (newChar: ICharacter) => {
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
