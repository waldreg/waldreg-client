import styled from 'styled-components';

import UserInfo from '../UserInfo';
import { User } from '../../../interfaces/user';

export const UserItems = ({
  handleClickChangeUser,
  allUserList,
  value,
}: any) => {
  const filterList =
    value === ''
      ? allUserList
      : allUserList?.filter((user: User) =>
          user.name.toLowerCase().includes(value.toLowerCase())
        );
  return (
    <UserItemWrapper>
      {filterList.map((user: User) => (
        <UserItem
          key={user.id}
          onClick={() => handleClickChangeUser(user.user_id)}
        >
          <UserInfo user={user} size={'small'} />
        </UserItem>
      ))}
    </UserItemWrapper>
  );
};

const UserItemWrapper = styled.div`
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
