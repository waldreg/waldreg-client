import styled from 'styled-components';

import COLOR from '../../../constants/color';

const CharacterUser = () => {
  return <Container></Container>;
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
