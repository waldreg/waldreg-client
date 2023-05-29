import { useState } from 'react';
import RewardTagList from '../../../components/reward/RewardTagList';
import RewardUserList from '../../../components/reward/RewardUserList';
import RewardUser from '../../../components/reward/RewardUser';

const RewardSettingPage = () => {
  const [user, setUser] = useState<number>(1);

  return (
    <>
      <RewardTagList />
      <RewardUserList setUser={setUser} />
      <RewardUser user={user} />
    </>
  );
};

export default RewardSettingPage;
