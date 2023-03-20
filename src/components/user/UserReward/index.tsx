import styled from 'styled-components';

import COLOR from '../../../constants/color';
import FONT from '../../../constants/fonts';
import { UserRewards } from '../../../interfaces/reward';

import { Tags, Tag, Text } from '../../reward/RewardTagList/style';
import { RoundDelIcon } from '../../Icons/BasicIcons';
import { IconWrapper } from '../../character/CharacterList/style';

export const UserReward = ({ user }: { user?: UserRewards }) => {
  return (
    <Container>
      <Content>
        <Name>
          <UserName style={FONT.SUBTITLE3}>{user?.name}</UserName>
          <UserId style={FONT.SUBTITLE2}>{user?.user_id}</UserId>
        </Name>
        <Point>
          <div style={FONT.NUMBER1}>{user?.reward}</div>
          <div style={FONT.SUBTITLE2}>점</div>
        </Point>
      </Content>
      <Tags>
        {user?.reward_infos.map((reward) => (
          <Tag key={reward.reward_id}>
            <Text>
              <Left>
                <div style={FONT.SUBTITLE2}>{reward.reward_tag_title}</div>
                {reward.reward_point > 0 ? (
                  <PointTag style={FONT.SUBTITLE1} positive={true}>
                    + {reward.reward_point} 점
                  </PointTag>
                ) : (
                  <PointTag style={FONT.SUBTITLE1} positive={false}>
                    {reward.reward_point.toString().replace('-', '- ')} 점
                  </PointTag>
                )}
              </Left>
              <Date style={FONT.DETAIL1}>
                {reward.reward_presented_at.split('T')[0]}
              </Date>
            </Text>
            <IconWrapper>
              <RoundDelIcon />
            </IconWrapper>
          </Tag>
        ))}
      </Tags>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Content = styled.div`
  width: 100%;
  padding: 1rem;

  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
`;

const Name = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const UserName = styled.div`
  color: ${COLOR.GRAY4};
`;
const UserId = styled.div`
  color: ${COLOR.GRAY3};
`;

const Point = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const PointTag = styled.div<{ positive: boolean }>`
  padding: 0.2rem 0.8rem;

  border-radius: 0.5rem;

  color: ${(props) => (props.positive ? COLOR.GREEN4 : COLOR.RED2)};
`;

const Date = styled.div`
  color: ${COLOR.GRAY3};
`;
