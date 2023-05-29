import styled from 'styled-components';

import { Top } from '../../character/CharacterList/style';
import Container from '../../common/container';

import { Title } from '../../common/pagetitle/style';
import COLOR from '../../../constants/color';
import FONT from '../../../constants/fonts';
import useUserReward from '../../../hooks/reward/useUserReward';
import { UserReward } from '../../user/UserReward';

const RewardUser = ({ user }: { user: number }) => {
  const userReward = useUserReward(user);

  return (
    <Container width="60%">
      <Top>
        <Title style={FONT.HEADING}>유저 상벌점</Title>
      </Top>
      <UserReward user={userReward} icon={true} />
    </Container>
  );
};

export default RewardUser;
