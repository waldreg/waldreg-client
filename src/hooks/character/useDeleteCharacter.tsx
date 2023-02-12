import { useMutation, useQueryClient } from 'react-query';

import { waldregAxios } from '../../apis/axios';
import { characterKeys } from '../../types/settingKeys';

const delCharacter = async (name: string) => {
  await waldregAxios.delete(`/character/${name}`);
};

const useDeleteCharacter = () => {
  const queryClient = useQueryClient();
  return useMutation(delCharacter, {
    onSuccess: () => {
      queryClient.invalidateQueries(characterKeys.all);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export default useDeleteCharacter;
