import { useMutation, useQueryClient } from 'react-query';

import { waldregAxios } from '../../apis/axios';
import { IPermission } from '../../interfaces/character';
import { characterKeys, permissionKeys } from '../../types/settingKeys';

const editCharacter = async ({
  name,
  newChar,
}: {
  name: string;
  newChar: {
    character_name: string;
    permissions: IPermission[];
  };
}) => {
  await waldregAxios.patch(`/character/${name}`, newChar);
};

const useEditCharacter = (name: string) => {
  const queryClient = useQueryClient();
  return useMutation(editCharacter, {
    onSuccess: () => {
      queryClient.invalidateQueries(characterKeys.detail(name));
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export default useEditCharacter;
