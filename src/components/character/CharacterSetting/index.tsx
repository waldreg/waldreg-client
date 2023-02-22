import styled from 'styled-components';
import { useState } from 'react';

import useCharacter from '../../../hooks/character/useCharacter';
import useEditCharacter from '../../../hooks/character/useEditCharacter';
import useDeleteCharacter from '../../../hooks/character/useDeleteCharacter';
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
  const character = useCharacter(name);
  const editMutation = useEditCharacter(name);
  const deleteMutation = useDeleteCharacter();
  const { value, handleChangeInput, reset } = useInput(name);
  const { checkedList, updateCheckList } = useToggleBox(
    character?.permissions || []
  );

  console.log(checkedList);

  const perThemeList = [
    { name: '유저', range: [0, 3] },
    { name: '게시판', range: [4, 15] },
    { name: '일정', range: [16, 18] },
    { name: '상벌점', range: [19, 19] },
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
        <PerThemeList style={FONT.SUBTITLE2}>
          {perThemeList.map((theme) => (
            <Item
              key={theme.name}
              onClick={() => setPerTheme(theme)}
              selected={theme.name === perTheme.name}
            >
              {theme.name}
            </Item>
          ))}
        </PerThemeList>
        <Items>
          {checkedList
            .filter(
              (per) =>
                per.permission_id >= perTheme.range[0] &&
                per.permission_id <= perTheme.range[1]
            )
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
