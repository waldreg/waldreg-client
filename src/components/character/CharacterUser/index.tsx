import styled from 'styled-components';

import useUserList from '../../../hooks/user/useUserList';

import { Title } from '../../common/pagetitle/style';
import COLOR from '../../../constants/color';
import FONT from '../../../constants/fonts';

const CharacterUser = ({ name }: { name: string }) => {
  const userList = useUserList(1, 50);
  const filterUserList = userList?.users.filter(
    (user) => user.character === name
  );

  return (
    <Container>
      <Title style={FONT.HEADING}>소속 유저</Title>
      {filterUserList?.map((user) => user.name)}
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
`;

export default CharacterUser;
