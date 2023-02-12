import styled from 'styled-components';

import useCharacter from '../../../hooks/character/useCharacter';
import useDeleteCharacter from '../../../hooks/character/useDeleteCharacter';
import { useInput } from '../../../hooks/common/useInput';

import { Title } from '../../common/PageTitle/style';
import { InputAdd } from '../../common/inputs/input_add';
import { ButtonBig } from '../../common/buttons/button_big';
import Permission from '../Permission';

import { IPermission } from '../../../interfaces/character';

import COLOR from '../../../constants/color';

const CharacterSetting = ({
  name,
  setChar,
}: {
  name: string;
  setChar: any;
}) => {
  const character = useCharacter(name);
  const { mutate } = useDeleteCharacter();
  const { value, handleChangeInput, reset } = useInput(name);

  return (
    <Container>
      <Title>역할 설정</Title>

      <InputAdd
        value={value}
        placeholder={''}
        onChange={handleChangeInput}
        reset={reset}
      />
      <Permissions>
        {character?.permissions?.map((permission: IPermission) => (
          <Permission key={permission.permission_id} {...permission} />
        ))}
      </Permissions>
      <ButtonBig
        content={'역할 삭제하기'}
        color={COLOR.RED2}
        onClick={() => {
          mutate(name);
          setChar('Admin');
        }}
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

export default CharacterSetting;
