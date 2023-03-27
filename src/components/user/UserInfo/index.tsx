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
      <Tags size={size}>
        <Tags size="small">
          {size === 'big' && (
            <Tag style={FONT.SUBTITLE1} size={size}>
              역할
            </Tag>
          )}
          <Tag style={FONT.SUBTITLE1} size={size}>
            {user.character}
          </Tag>
        </Tags>

        <Tags size="small">
          {size === 'big' && (
            <Tag style={FONT.SUBTITLE1} size={size}>
              전화번호
            </Tag>
          )}
          <Tag style={FONT.SUBTITLE1} size={size}>
            {user.phone_number}
          </Tag>
        </Tags>

        <Tags size="small">
          {size === 'big' && (
            <Tag style={FONT.SUBTITLE1} size={size}>
              가입날짜
            </Tag>
          )}
          <Tag style={FONT.SUBTITLE1} size={size}>
            {user.created_at}
          </Tag>
        </Tags>
      </Tags>
    </Content>
  );
};

const Content = styled.div<{ size: string }>`
  width: 100%;
  padding: ${(props) => (props.size === 'small' ? `1.1rem` : `2rem`)};

  border-radius: 0.5rem;
  display: flex;
  flex-direction: ${(props) => (props.size === 'small' ? 'row' : `column`)};
  align-items: ${(props) => (props.size === 'small' ? 'center' : `start`)};
  justify-content: space-between;
  gap: ${(props) => (props.size === 'small' ? '0' : `2rem`)};

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

const Tags = styled.div<{ size: string }>`
  display: flex;
  flex-direction: ${(props) => (props.size === 'small' ? `row` : `column`)};
  gap: 1rem;
`;

const Tag = styled.div<{ size: string }>`
  width: max-content;
  padding: 0.4rem 1rem;

  border: ${(props) => (props.size === 'small' ? '1.5px' : `0`)} solid
    ${COLOR.GREEN3};
  border-radius: 0.5rem;
  color: ${(props) => (props.size === 'small' ? COLOR.GREEN4 : COLOR.GRAY4)};
  background: ${(props) => (props.size === 'small' ? COLOR.GREEN1 : '')};
`;

export default UserInfo;
