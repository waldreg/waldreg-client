import styled from 'styled-components';

import useUserList from '../../../hooks/user/useUserList';
import { useInput } from '../../../hooks/common/useInput';

import { User } from '../../../interfaces/user';

import { InputFillThin } from '../../common/inputs/input_fill';
import UserInfo from '../UserInfo';

import COLOR from '../../../constants/color';
import FONT from '../../../constants/fonts';

const UserList = ({ handleClickChangeUser }: any) => {
  const userList = useUserList(1, 100);

  const { value, handleChangeInput, reset } = useInput('');
  const searched = userList?.users.filter((user) =>
    user.name.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <Container>
      <Top>
        <Title style={FONT.HEADING}>유저 목록</Title>
        <InputFillThin
          value={value}
          placeholder={'유저 이름'}
          onChange={handleChangeInput}
          reset={reset}
        />
      </Top>
      <UserItems>
        {searched?.length === 0 || searched === undefined ? (
          <div>검색된 유저가 없습니다</div>
        ) : (
          searched.map((user: User) => (
            <UserItem
              key={user.id}
              onClick={() => handleClickChangeUser(user.user_id)}
            >
              <UserInfo user={user} />
            </UserItem>
          ))
        )}
      </UserItems>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${COLOR.WHITE};

  border-radius: 1rem;
  padding: 2rem;

  display: flex;
  flex-direction: column;

  gap: 2rem;
`;

const Title = styled.div`
  width: max-content;
  white-space: nowrap;
`;

const Top = styled.div`
  width: 30rem;
  display: flex;
  align-items: center;
  gap: 5rem;
`;

const UserItems = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const UserItem = styled.div`
  width: 100%;
  cursor: pointer;
`;

export default UserList;
