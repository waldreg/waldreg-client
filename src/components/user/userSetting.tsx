import styled from 'styled-components';

import useUser from '../../hooks/user/useUser';
import useKickUser from '../../hooks/user/useKickUser';
import useEditUserCharacter from '../../hooks/user/useEditUserCharacter';
import { useInput } from '../../hooks/common/useInput';

import { User } from '../../interfaces/user';

import { InputFillThin } from '../common/inputs/input_fill';
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
      {user === undefined ? (
        <div>해당 유저가 존재하지 않습니다</div>
      ) : (
        <div key={user.id}>
          <UserName>유저이름:{user.name}</UserName>
          <UserId>유저아이디:{user.user_id}</UserId>
          <div>유저역할:{user.character}</div>
          <ButtonBig
            content="유저 강제 퇴장"
            color={COLOR.GREEN4}
            onClick={() => handleClickKickUser(user.id)}
          />
          <ButtonBig
            content="유저 역할 수정"
            color={COLOR.GREEN4}
            onClick={() => handleClickEditUser(user.id, user.user_id, 'Guest')}
          />
        </div>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 40%;
  height: 100%;
  background: ${COLOR.WHITE};

  border-radius: 1rem;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
`;

const Title = styled.div`
  width: 100%;
`;

const UserName = styled.div``;
const UserId = styled.div``;

export default UserSetting;
