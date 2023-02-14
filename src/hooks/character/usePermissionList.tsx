import { useQuery } from 'react-query';

import { waldregAxios } from '../../apis/axios';
import { Permission } from '../../interfaces/character';
import { permissionKeys } from '../../types/settingKeys';

const getPermissionList = async () => {
  const response = await waldregAxios.get('/permission');
  return response.data.permissions;
};

const usePermissionList = () => {
  const { data } = useQuery<Permission[]>(permissionKeys.all, () =>
    getPermissionList()
  );
  return data;
};

export default usePermissionList;
