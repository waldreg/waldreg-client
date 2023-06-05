import { useMutation, useQueryClient } from 'react-query';

import { waldregAxios } from '../../apis/axios';
import { characterKeys } from '../../types/settingKeys';
import useApiError from '../error/useApiError';

const delCharacter = async (name: string) => {
  await waldregAxios.delete(`/character/${name}`);
};

const useDeleteCharacter = () => {
  const queryClient = useQueryClient();
  const { handleError } = useApiError();

  return useMutation(delCharacter, {
    onSuccess: () => {
      queryClient.invalidateQueries(characterKeys.all);
    },
    onError: (error: any) => {
      handleError(error);
    },
  });
};

export default useDeleteCharacter;
