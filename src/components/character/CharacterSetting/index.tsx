import { useState } from 'react';
import styled from 'styled-components';

import useCharacter from '../../../hooks/character/useCharacter';
import useEditCharacter from '../../../hooks/character/useEditCharacter';
import useDeleteCharacter from '../../../hooks/character/useDeleteCharacter';
import { useInput } from '../../../hooks/common/useInput';
import { useToggleBox } from '../../../hooks/common/useCheckBox';

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
  const editMutation = useEditCharacter();
  const deleteMutation = useDeleteCharacter();
  const { value, handleChangeInput, reset } = useInput(name);
  const { checkedList, updateCheckList, checkReset } = useToggleBox(
    character?.permissions || []
  );

  return (
    <Container>
      <Title>역할 설정</Title>
      <Content>
        <InputAdd
          value={value}
          placeholder={''}
          onChange={handleChangeInput}
          reset={reset}
        />
        <Permissions>
          {checkedList?.map((permission: IPermission) => (
            <Permission
              key={permission.permission_id}
              per={permission}
              updateCheckList={updateCheckList}
            />
          ))}
        </Permissions>
      </Content>
      <ButtonBig
        content={'역할 수정하기'}
        color={COLOR.GREEN4}
        onClick={() => {
          editMutation.mutate({
            name: name,
            newChar: {
              character_name: value,
              permissions: character?.permissions || [],
            },
          });
        }}
      />
      <ButtonBig
        content={'역할 삭제하기'}
        color={COLOR.RED2}
        onClick={() => {
          deleteMutation.mutate(name);
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
  justify-content: space-between;
`;

const Content = styled.div`
  overflow: auto;
`;

const Permissions = styled.div``;

export default CharacterSetting;
