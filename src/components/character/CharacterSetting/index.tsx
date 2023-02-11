import styled from 'styled-components';

import useCharacter from '../../../hooks/character/useCharacter';
import useDeleteCharacter from '../../../hooks/character/useDeleteCharacter';

import { Title } from '../../common/PageTitle/style';
import Toggle from '../../common/toggles/toggle';
import { ButtonBig } from '../../common/buttons/button_big';

import { IPermission } from '../../../interfaces/character';

import COLOR from '../../../constants/color';

const CharacterSetting = ({ name }: { name: string }) => {
  const character = useCharacter(name);
  const { mutate } = useDeleteCharacter();

  return (
    <Container>
      <Title>역할 설정</Title>
      <Permissions>
        {character?.permissions?.map((permission: IPermission) => (
          <Permission key={permission.permission_id}>
            <div>{permission.permission_name}</div>
            <Toggle state={permission.permission_status === 'true'} />
          </Permission>
        ))}
      </Permissions>
      <ButtonBig
        content={'역할 삭제하기'}
        color={COLOR.RED2}
        onClick={() => mutate(name, { onError: (error) => console.log(error) })}
      />
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
