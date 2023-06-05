import styled from 'styled-components';

import { Top } from '../../components/character/CharacterList/style';

import COLOR from '../../constants/color';
import FONT from '../../constants/fonts';

import useUserReward from '../../hooks/reward/useUserReward';
import useCurUser from '../../hooks/curuser/useCurUser';
import { UserReward } from '../../components/user/UserReward';
import Container from '../../components/common/container';

const RewardPage = () => {
  const user = useCurUser();
  const userReward = useUserReward(user?.id || 1);

  return (
    <Wrapper>
      <Container width="35%">
        <Top>
          <Title style={FONT.HEADING}>내 상벌점</Title>
        </Top>
        <UserReward user={userReward} icon={false} />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
`;

const Title = styled.div``;

export default RewardPage;
