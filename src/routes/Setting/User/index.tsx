import { useState } from 'react';

import UserList from '../../../components/user/userList';
import UserSetting from '../../../components/user/userSetting';

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
