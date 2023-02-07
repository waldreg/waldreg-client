import styled from 'styled-components';

import { useCharacter } from '../../../hooks/useCharQuery';

import { Title } from '../../common/PageTitle/style';

import { IPermission } from '../../../interfaces/character';
import COLOR from '../../../constants/color';

const CharacterSetting = ({ name }: { name: string }) => {
  const character = useCharacter(name);

  return (
    <Container>
      <Title>역할 설정</Title>
      <Permissions>
        {character?.permissions?.map((permission: IPermission) => (
          <Permission key={permission.permission_id}>
            <div>{permission.permission_name}</div>
            <div>{permission.permission_status}</div>
          </Permission>
        ))}
      </Permissions>
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

const Permissions = styled.div``;

const Permission = styled.div`
  padding: 0.5rem;
  display: flex;
  gap: 1rem;
`;

export default CharacterSetting;
