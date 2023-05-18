import styled from 'styled-components';
import { QueryInfiniteScroll } from 'react-query-infinite-scroll';

import useUserList from '../../../hooks/user/useUserList';
import { useInput } from '../../../hooks/common/useInput';

import { UserItems } from '../UserItems';

import { InputFillThin } from '../../common/inputs/input_fill';

import COLOR from '../../../constants/color';
import FONT from '../../../constants/fonts';

const UserList = ({ handleClickChangeUser }: any) => {
  const { value, handleChangeInput, reset } = useInput('');
  const query = useUserList();

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

      <Content>
        <QueryInfiniteScroll query={query} observer={<div>loading</div>}>
          {query.isFetched &&
            query.userList?.pages.map((users, i) => (
              <UserItems
                key={i}
                handleClickChangeUser={handleClickChangeUser}
                allUserList={users.data.users}
                value={value}
              />
            ))}
        </QueryInfiniteScroll>
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
  gap: 2rem;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  overflow: auto;
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

export default UserList;
