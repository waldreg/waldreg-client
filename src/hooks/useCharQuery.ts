import { useQuery, useMutation, useQueryClient } from 'react-query';
import { characterAPI } from '../apis/characterAPI';
import { characterKeys, permissionKeys } from '../types/settingKeys';
import { IPermission, ICharacter } from '../interfaces/character';

export const usePermissionList = () => {
  const { data } = useQuery<IPermission[]>(permissionKeys.all, () =>
    characterAPI.getPermissionList()
  );
  return data;
};

export const useCharacter = (name: string) => {
  const { data } = useQuery<ICharacter>(characterKeys.detail(name), () =>
    characterAPI.getCharacter(name)
  );
  return data;
};

export const useCharacterList = () => {
  const { data } = useQuery<ICharacter[]>(characterKeys.all, () =>
    characterAPI.getCharacterList()
  );
  return data;
};

export const useCreateCharacter = () => {
  const queryClient = useQueryClient();
  return useMutation(characterAPI.createCharacter, {
    onSuccess: () => {
      queryClient.invalidateQueries(characterKeys.all);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useEditCharacter = () => {
  const queryClient = useQueryClient();
  return useMutation(characterAPI.editCharacter, {
    onSuccess: () => {
      queryClient.invalidateQueries(characterKeys.all);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useDeleteCharacter = () => {
  const queryClient = useQueryClient();
  return useMutation(characterAPI.delCharacter, {
    onSuccess: () => {
      queryClient.invalidateQueries(characterKeys.all);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};
