import { useQuery } from 'react-query';

import { waldregAxios } from '../../apis/axios';
import { ICharacter } from '../../interfaces/character';
import { characterKeys } from '../../types/settingKeys';

const getCharacter = async (name: string) => {
  const response = await waldregAxios.get(`/character/${name}`);
  return response.data;
};

const useCharacter = (name: string) => {
  const { data } = useQuery<ICharacter>(characterKeys.detail(name), () =>
    getCharacter(name)
  );
  return data;
};

export default useCharacter;
