import styled from 'styled-components';
import { User } from '../../../interfaces/user';

import COLOR from '../../../constants/color';
import FONT from '../../../constants/fonts';

export const UserRewards = ({ user, size }: { user: User; size: string }) => {
  return (
    <Content size={size}>
      <Name>
        <UserName style={FONT.SUBTITLE3}>{user.name}</UserName>
        <UserId style={FONT.SUBTITLE2}>{user.user_id}</UserId>
      </Name>
      <Point>
        <div style={FONT.HEADING}>{user.reward_point}</div>
        <div style={FONT.SUBTITLE2}>점</div>
      </Point>
    </Content>
  );
};

const Content = styled.div<{ size: string }>`
  width: 100%;
  padding: ${(props) => (props.size === 'small' ? `1.1rem` : `2rem`)};

  border-radius: 0.5rem;
  display: flex;
  align-items: center;
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
  align-self: flex-end;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;
`;
