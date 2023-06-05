import { useQuery } from 'react-query';

import { waldregAxios } from '../../apis/axios';
import { Permission } from '../../interfaces/character';
import { permissionKeys } from '../../types/settingKeys';
import useApiError from '../error/useApiError';

const getPermissionList = async () => {
  const response = await waldregAxios.get('/permission');
  return response.data.permissions;
};

const usePermissionList = () => {
  const { handleError } = useApiError();
  const { data } = useQuery<Permission[]>(
    permissionKeys.all,
    () => getPermissionList(),
    {
      onError: (error: any) => {
        handleError(error);
      },
    }
  );
  return data;
};

export default usePermissionList;
