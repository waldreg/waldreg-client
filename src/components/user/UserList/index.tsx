import styled from 'styled-components';
import { useState } from 'react';

import useUserList from '../../../hooks/user/useUserList';
import useAllUserList from '../../../hooks/user/useAllUserList';
import { useInput } from '../../../hooks/common/useInput';

import { User } from '../../../interfaces/user';

import { InputFillThin } from '../../common/inputs/input_fill';
import UserInfo from '../UserInfo';

import COLOR from '../../../constants/color';
import FONT from '../../../constants/fonts';

const UserList = ({ handleClickChangeUser }: any) => {
  const NUMBER = 7;

  const [page, setPage] = useState<number>(1);
  const allUserList = useAllUserList(1, 100)?.users;
  const userList = useUserList(page, page + (NUMBER - 1))?.users;
  const max = useUserList(page, page + (NUMBER - 1))?.max_idx || 1;
  const numPages = Math.ceil(max / NUMBER);
  const pageNums = Array(numPages)
    .fill(0)
    .map((v, i) => i + 1);

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
      <PageNav>
        {pageNums.map((num) => (
          <PageBtn
            key={num}
            onClick={(e: any) => {
              setPage(Number(e.target.innerText) * NUMBER - (NUMBER - 1));
            }}
            style={FONT.DETAIL1}
            selected={num * NUMBER - (NUMBER - 1) === page}
          >
            {num}
          </PageBtn>
        ))}
      </PageNav>
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

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  overflow: hidden;
`;

const UserItem = styled.div`
  width: 100%;
  height: 100%;

  cursor: pointer;
`;

const PageNav = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

const PageBtn = styled.button<{ selected: boolean }>`
  width: 30px;
  height: 30px;

  border-radius: 0.5rem;
  color: ${(props) => (props.selected ? `${COLOR.GREEN4}` : `${COLOR.GRAY4}`)};
  background: ${(props) =>
    props.selected ? `${COLOR.GREEN1}` : `${COLOR.GRAY0}`};
`;

export default UserList;
