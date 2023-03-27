import styled from 'styled-components';
import { useState } from 'react';

import useCharacter from '../../../hooks/character/useCharacter';
import useEditCharacter from '../../../hooks/character/useEditCharacter';
import useDeleteCharacter from '../../../hooks/character/useDeleteCharacter';
import usePermissionList from '../../../hooks/character/usePermissionList';
import { useInput } from '../../../hooks/common/useInput';
import { useToggleBox } from '../../../hooks/common/useCheckBox';

import { Title } from '../../common/pagetitle/style';
import { InputLine } from '../../common/inputs/input_line';
import { ButtonBig } from '../../common/buttons/button_big';
import PermissionItem from '../Permission';
import { Top, Item } from '../CharacterList/style';

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
  const perList = usePermissionList();
  const character = useCharacter(name);
  const editMutation = useEditCharacter(name);
  const deleteMutation = useDeleteCharacter();
  const { value, handleChangeInput, reset } = useInput(name);
  const { checkedList, updateCheckList } = useToggleBox(
    character?.permissions || []
  );

  const perThemeList = [
    'User',
    'Character',
    'Board',
    'Schedule',
    'Reward',
    'Attendance',
    'Teambuilding',
  ];
  const [perTheme, setPerTheme] = useState(perThemeList[0]);

  checkedList.sort((prev, cur) => {
    if (prev.permission_id > cur.permission_id) return 1;
    else return -1;
  });

  return (
    <Container>
      <Content>
        <Top>
          <Title style={FONT.HEADING}>설정</Title>
          <Text
            onClick={() => {
              deleteMutation.mutate(name);
              setChar('Admin');
            }}
            style={FONT.SUBTITLE2}
          >
            역할 삭제
          </Text>
        </Top>
        <InputLine
          value={value}
          placeholder={''}
          onChange={handleChangeInput}
          reset={reset}
        />
        <PerThemeList style={FONT.SUBTITLE2}>
          {perThemeList.map((theme) => (
            <Item
              key={theme}
              onClick={() => setPerTheme(theme)}
              selected={theme === perTheme}
            >
              {theme}
            </Item>
          ))}
        </PerThemeList>
        <Items>
          {checkedList
            .filter((per) => per.permission_service === perTheme)
            .map((permission: Permission) => (
              <PermissionItem
                key={permission.permission_id}
                per={permission}
                updateCheckList={updateCheckList}
              />
            ))}
        </Items>
      </Content>
      <ButtonBig
        content={'변경사항 저장'}
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
    </Container>
  );
};

const Container = styled.div`
  width: 140%;
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

const PerThemeList = styled.div`
  display: flex;
  gap: 1rem;
`;

const Items = styled.div``;

const Text = styled.button`
  color: ${COLOR.GREEN4};
`;

export default CharacterSetting;
