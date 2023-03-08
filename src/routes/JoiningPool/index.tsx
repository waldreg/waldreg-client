import { useState } from 'react';

import JoiningPoolUserList from '../../components/joiningpool/JoiningPoolUserList';

const JoiningPool = () => {
  const [user, setUser] = useState('Admin');

  const handleClickChangeUser = (name: string) => {
    setUser(name);
  };

  return (
    <>
      <JoiningPoolUserList handleClickChangeUser={handleClickChangeUser} />
    </>
  );
};

export default JoiningPool;
