import styled from 'styled-components';
import { User } from '../../../interfaces/user';

import COLOR from '../../../constants/color';
import FONT from '../../../constants/fonts';

const UserInfo = ({ user, size }: { user: User; size: string }) => {
  console.log(user);

  return (
    <Content size={size}>
      <Name>
        <UserName style={FONT.SUBTITLE3}>{user.name}</UserName>
        <UserId style={FONT.SUBTITLE2}>{user.user_id}</UserId>
      </Name>
      <Tags>
        <Tag style={FONT.SUBTITLE1}>{user.character}</Tag>
        {user.phone_number && (
          <Tag style={FONT.SUBTITLE1}>{user.phone_number}</Tag>
        )}
        <Tag style={FONT.SUBTITLE1}>{user.created_at}</Tag>
      </Tags>
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

  background: ${COLOR.GRAY0};
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

const Tags = styled.div`
  display: flex;
  gap: 1rem;
`;

const Tag = styled.div`
  width: max-content;
  padding: 0.4rem 1rem;

  border: 2px solid ${COLOR.GREEN4};
  border-radius: 0.5rem;
  color: ${COLOR.GREEN4};
  background: ${COLOR.GREEN1};
`;

export default UserInfo;
