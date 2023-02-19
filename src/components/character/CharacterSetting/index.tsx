import styled from 'styled-components';

import useCharacter from '../../../hooks/character/useCharacter';
import useEditCharacter from '../../../hooks/character/useEditCharacter';
import useDeleteCharacter from '../../../hooks/character/useDeleteCharacter';
import { useInput } from '../../../hooks/common/useInput';
import { useToggleBox } from '../../../hooks/common/useCheckBox';

import { Title } from '../../common/pagetitle/style';
import { InputLine } from '../../common/inputs/input_line';
import { ButtonBig } from '../../common/buttons/button_big';
import PermissionItem from '../Permission';
import { Top } from '../CharacterList/style';

import { Permission } from '../../../interfaces/character';

import COLOR from '../../../constants/color';
import FONT from '../../../constants/fonts';

const CharacterSetting = ({
  name,
  setChar,
}: {
  name: string;
  setChar: any;
}) => {
  const character = useCharacter(name);
  const editMutation = useEditCharacter(name);
  const deleteMutation = useDeleteCharacter();
  const { value, handleChangeInput, reset } = useInput(name);
  const { checkedList, updateCheckList } = useToggleBox(
    character?.permissions || []
  );

  return (
    <Container>
      <Content>
        <Top>
          <Title style={FONT.HEADING}>설정</Title>
          <Text
            onClick={() => {
              editMutation.mutate({
                name: name,
                newChar: {
                  character_name: value,
                  permissions: character?.permissions || [],
                },
              });
            }}
            style={FONT.SUBTITLE2}
          >
            변경사항 저장
          </Text>
        </Top>
        <InputLine
          value={value}
          placeholder={''}
          onChange={handleChangeInput}
          reset={reset}
        />
        <Items>
          {checkedList?.map((permission: Permission) => (
            <PermissionItem
              key={permission.permission_id}
              per={permission}
              updateCheckList={updateCheckList}
            />
          ))}
        </Items>
      </Content>
      <ButtonBig
        content={'역할 삭제하기'}
        color={COLOR.GREEN4}
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
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow: auto;
`;

const Items = styled.div``;

const Text = styled.div`
  color: ${COLOR.GREEN4};
`;

export default CharacterSetting;
