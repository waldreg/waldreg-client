import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Top } from '../../character/CharacterList/style';

import { Title } from '../../common/pagetitle/style';
import COLOR from '../../../constants/color';
import FONT from '../../../constants/fonts';
import useUserReward from '../../../hooks/reward/useUserReward';
import { UserReward } from '../../user/UserReward';

const RewardUser = ({ user }: { user: number }) => {
  const userReward = useUserReward(user);

  return (
    <Container>
      <Top>
        <Title style={FONT.HEADING}>유저 상벌점</Title>
      </Top>
      <UserReward user={userReward} />
    </Container>
  );
};

const Container = styled.div`
  width: 60%;
  height: 100%;
  background: ${COLOR.WHITE};

  border-radius: 1rem;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export default RewardUser;
