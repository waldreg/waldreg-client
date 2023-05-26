import styled from 'styled-components';

import { Top } from '../../components/character/CharacterList/style';

import COLOR from '../../constants/color';
import FONT from '../../constants/fonts';

import useUserReward from '../../hooks/reward/useUserReward';
import useCurUser from '../../hooks/curuser/useCurUser';
import { UserReward } from '../../components/user/UserReward';

const RewardPage = () => {
  const user = useCurUser();
  const userReward = useUserReward(user?.id || 1);

  return (
    <Wrapper>
      <Container>
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

const Container = styled.div`
  width: 30%;
  min-width: 20rem;
  height: 100%;
  background: ${COLOR.WHITE};

  border-radius: 1rem;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Title = styled.div``;

export default RewardPage;
