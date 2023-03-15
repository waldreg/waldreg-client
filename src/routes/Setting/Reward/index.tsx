import styled from 'styled-components';
import RewardTagList from '../../../components/reward/RewardTagList';
import RewardUserList from '../../../components/reward/RewardUserList';

const RewardSettingPage = () => {
  return (
    <>
      <RewardUserList />
      <RewardTagList />
    </>
  );
};

export default RewardSettingPage;
