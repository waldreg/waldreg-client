import styled from 'styled-components/macro';
import { useState, useCallback } from 'react';

import useCharacterList from '../../../hooks/character/useCharacterList';

import { Character } from '../../../interfaces/character';
import { Title } from '../../common/pagetitle/style';

import CharacterCreateModal from '../CharacterCreateModal';

import { PlusIcon } from '../../Icons/SettingIcons';
import FONT from '../../../constants/fonts';
import COLOR from '../../../constants/color';

const CharacterList = ({ handleClickChangeChar }: any) => {
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
  width: 70%;
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
  overflow: auto;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IconWrapper = styled.div``;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  algin-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const Item = styled.div`
  width: 100%;
  padding: 1rem 0;

  cursor: pointer;
`;

export default CharacterList;
