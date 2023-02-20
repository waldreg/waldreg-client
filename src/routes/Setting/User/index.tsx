import { useState } from 'react';

import UserList from '../../../components/user/UserList';
import UserSetting from '../../../components/user/UserSetting';

const UserSettingPage = () => {
  const [user, setUser] = useState('Admin');

  const handleClickChangeUser = (name: string) => {
    setUser(name);
  };

  return (
    <>
      <UserList handleClickChangeUser={handleClickChangeUser} />
      <UserSetting name={user} />
    </>
  );
};

export default UserSettingPage;
