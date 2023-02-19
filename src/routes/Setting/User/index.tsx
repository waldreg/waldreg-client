import styled from 'styled-components';
import { waldregAxios } from '../../../apis/axios';

import useUserList from '../../../hooks/user/useUserList';
import useKickUser from '../../../hooks/user/useKickUser';
import useEditUserCharacter from '../../../hooks/user/useEditUserCharacter';
import { User } from '../../../interfaces/user';

const UserSettingPage = () => {
  const userList = useUserList(1, 100);
  const kickMutation = useKickUser();
  const editMutation = useEditUserCharacter('ham');

  const handleClickKickUser = (id: number) => {
    kickMutation.mutate(id);
  };

  const handleClickEditUser = (id: number, userId: string, char: string) => {
    editMutation.mutate({ id: id, character: char });
  };

  return (
    <>
      {userList?.users?.map((user: User) => (
        <div key={user.id}>
          <UserName>유저이름:{user.name}</UserName>
          <UserId>유저아이디:{user.user_id}</UserId>
          <div>유저역할:{user.character}</div>
          <button onClick={() => handleClickKickUser(user.id)}>
            유저 강제 퇴장
          </button>
          <button
            onClick={() => handleClickEditUser(user.id, user.user_id, 'Guest')}
          >
            유저 역할 수정
          </button>
        </div>
      ))}
    </>
  );
};

const UserName = styled.div``;
const UserId = styled.div``;

export default UserSettingPage;
