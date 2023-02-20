import styled from 'styled-components';

import useUser from '../../hooks/user/useUser';
import useKickUser from '../../hooks/user/useKickUser';
import useEditUserCharacter from '../../hooks/user/useEditUserCharacter';

import { ButtonBig } from '../common/buttons/button_big';

import COLOR from '../../constants/color';
import FONT from '../../constants/fonts';

const UserSetting = ({ name }: { name: string }) => {
  const user = useUser(name);
  const kickMutation = useKickUser();
  const editMutation = useEditUserCharacter('ham');

  const handleClickKickUser = (id: number) => {
    kickMutation.mutate(id);
  };

  const handleClickEditUser = (id: number, userId: string, char: string) => {
    editMutation.mutate({ id: id, character: char });
  };

  return (
    <Container>
      <Title style={FONT.HEADING}>유저 관리</Title>
      <Content>
        {user === undefined ? (
          <div>해당 유저가 존재하지 않습니다</div>
        ) : (
          <div key={user.id}>
            <UserName style={FONT.SUBTITLE2}>{user.name}</UserName>
            <UserId style={FONT.SUBTITLE2}>{user.user_id}</UserId>
            <Tag style={FONT.SUBTITLE1}>{user.character}</Tag>
            <ButtonBig
              content="유저 강제 퇴장"
              color={COLOR.GREEN4}
              onClick={() => handleClickKickUser(user.id)}
            />
            <ButtonBig
              content="유저 역할 수정"
              color={COLOR.GREEN4}
              onClick={() =>
                handleClickEditUser(user.id, user.user_id, 'Guest')
              }
            />
          </div>
        )}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 40%;
  height: 100%;
  background: ${COLOR.WHITE};

  border-radius: 1rem;
  padding: 2rem;

  gap: 2rem;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  width: 100%;
`;

const UserName = styled.div``;
const UserId = styled.div``;

const Tag = styled.div`
  width: max-content;
  padding: 0.25rem 0.5rem;

  border: 2px solid ${COLOR.GREEN4};
  border-radius: 0.5rem;
  color: ${COLOR.GREEN4};
  background: ${COLOR.GREEN1};
`;

export default UserSetting;
