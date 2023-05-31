import COLOR from "../../../constants/color";
import FONT from "../../../constants/fonts";
import { User } from "../../../interfaces/user";
import styled from "styled-components";

const JoiningPoolUserInfo = ({ user, size }: { user: User; size: string }) => {
  return (
    <Content size={size}>
      <Name>
        <UserName style={FONT.SUBTITLE3}>{user.name}</UserName>
        <UserId style={FONT.SUBTITLE2}>{user.user_id}</UserId>
      </Name>
    </Content>
  );
};

const Content = styled.div<{ size: string }>`
  width: 100%;
  padding: ${(props) => (props.size === "small" ? `1.1rem` : `2rem`)};

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

const Tag = styled.div`
  width: max-content;
  padding: 0.25rem 0.5rem;

  border: 2px solid ${COLOR.GREEN4};
  border-radius: 0.5rem;
  color: ${COLOR.GREEN4};
  background: ${COLOR.GREEN1};
`;

export default JoiningPoolUserInfo;
