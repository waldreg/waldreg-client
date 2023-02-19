import styled from 'styled-components/macro';
import { useState } from 'react';

import useCharacterList from '../../../hooks/character/useCharacterList';

import { Character } from '../../../interfaces/character';
import { Title } from '../../common/pagetitle/style';
import CharacterCreateModal from '../CharacterCreateModal';

import { PlusIcon } from '../../Icons/SettingIcons';
import FONT from '../../../constants/fonts';
import COLOR from '../../../constants/color';

const CharacterList = ({
  name,
  handleClickChangeChar,
}: {
  name: string;
  handleClickChangeChar: any;
}) => {
  const charList = useCharacterList();

  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);

  const handleClickCreateModal = () => {
    setIsOpenCreateModal(!isOpenCreateModal);
  };

  return (
    <Container>
      <Content>
        <Top>
          <Title style={FONT.HEADING}>역할</Title>
          {isOpenCreateModal && (
            <CharacterCreateModal setIsOpenCreateModal={setIsOpenCreateModal} />
          )}
          <IconWrapper onClick={handleClickCreateModal}>
            <PlusIcon />
          </IconWrapper>
        </Top>
        <Items>
          {charList?.map((character: Character) => (
            <Item
              key={character.id}
              onClick={() => handleClickChangeChar(character.character_name)}
              style={FONT.SUBTITLE1}
              selected={character.character_name === name}
            >
              {character.character_name}
            </Item>
          ))}
        </Items>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 50%;
  height: 100%;
  background: ${COLOR.WHITE};

  border-radius: 1rem;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  overflow: auto;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IconWrapper = styled.button``;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  algin-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const Item = styled.div<{ selected?: boolean }>`
  color: ${COLOR.GRAY3};
  padding: 0.8rem 1rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &:link {
    transition: 0.5s;
    text-decoration: none;
  }
  &:hover {
    background: ${COLOR.GREEN2};
    color: ${COLOR.BLACK};
  }
  background: ${(props) => (props.selected ? COLOR.GREEN2 : COLOR.WHITE)};
  color: ${(props) => (props.selected ? COLOR.BLACK : COLOR.GRAY3)};
  cursor: pointer;
`;

export default CharacterList;
