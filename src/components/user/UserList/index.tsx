import styled from 'styled-components';

import useUserList from '../../../hooks/user/useUserList';
import useAllUserList from '../../../hooks/user/useAllUserList';
import { useInput } from '../../../hooks/common/useInput';

import { User } from '../../../interfaces/user';

import { InputFillThin } from '../../common/inputs/input_fill';
import UserInfo from '../UserInfo';

import COLOR from '../../../constants/color';
import FONT from '../../../constants/fonts';

const UserList = ({ handleClickChangeUser }: any) => {
  const allUserList = useAllUserList(1, 100)?.users;
  const userList = useUserList(1, 100)?.users;

  const { value, handleChangeInput, reset } = useInput('');

  const filterList =
    value === ''
      ? userList
      : allUserList?.filter((user) =>
          user.name.toLowerCase().includes(value.toLowerCase())
        );

  return (
    <Container>
      <Content>
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
          {filterList?.length === 0 || filterList === undefined ? (
            <div style={FONT.BODY1}>검색된 유저가 없습니다</div>
          ) : (
            filterList.map((user: User) => (
              <UserItem
                key={user.id}
                onClick={() => handleClickChangeUser(user.user_id)}
              >
                <UserInfo user={user} size={'small'} />
              </UserItem>
            ))
          )}
        </UserItems>
      </Content>
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
  justify-content: space-between;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const Title = styled.div`
  min-width: max-content;
  width: 140%;
  white-space: nowrap;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserItems = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  overflow: auto;
`;

const UserItem = styled.div`
  width: 100%;
  height: 100%;

  cursor: pointer;
`;

export default UserList;
