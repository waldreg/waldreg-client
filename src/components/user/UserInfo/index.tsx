import styled from 'styled-components';
import { User } from '../../../interfaces/user';

import COLOR from '../../../constants/color';
import FONT from '../../../constants/fonts';

const UserInfo = ({ user, size }: { user: User; size: string }) => {
  return (
    <Content size={size}>
      <Name>
        <UserName style={FONT.SUBTITLE3}>{user.name}</UserName>
        <UserId style={FONT.SUBTITLE2}>{user.user_id}</UserId>
      </Name>
      {size === 'big' && <Line />}
      <Tags size={size}>
        <Tags size="small">
          {size === 'big' && <Subtitle style={FONT.SUBTITLE1}>역할</Subtitle>}
          <Tag style={FONT.SUBTITLE1} size={size}>
            {user.character}
          </Tag>
        </Tags>

        <Tags size="small">
          {size === 'big' && (
            <Subtitle style={FONT.SUBTITLE1}>가입날짜</Subtitle>
          )}
          <Tag style={FONT.SUBTITLE1} size={size}>
            {user.created_at}
          </Tag>
        </Tags>

        {size === 'big' && (
          <Tags size="small">
            <Subtitle style={FONT.SUBTITLE1}>전화번호</Subtitle>
            <Tag style={FONT.SUBTITLE1} size={size}>
              {user.phone_number}
            </Tag>
          </Tags>
        )}
      </Tags>
    </Content>
  );
};

const Content = styled.div<{ size: string }>`
  width: 100%;
  padding: ${(props) => (props.size === 'small' ? `1.1rem` : `2.4rem`)};

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

  white-space: nowrap;
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
  align-items: ${(props) => (props.size === 'small' ? `center` : `column`)};
  gap: 1rem;
`;

const Tag = styled.div<{ size: string }>`
  width: max-content;
  padding: 0.4rem 1rem;

  border-radius: 0.5rem;
  color: ${COLOR.GREEN4};
  border: ${(props) => props.size === 'small' && `1.8px solid ${COLOR.GREEN4}`};
`;

const Subtitle = styled.div`
  white-space: nowrap;
`;

const Line = styled.hr`
  width: 100%;
  height: 2px;
  background-color: ${COLOR.GRAY2};
`;

export default UserInfo;
