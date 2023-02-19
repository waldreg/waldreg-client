import { useState } from 'react';

import useCharacterList from '../../../hooks/character/useCharacterList';

import { Character } from '../../../interfaces/character';
import { Title } from '../../common/pagetitle/style';
import CharacterCreateModal from '../CharacterCreateModal';

import { PlusIcon } from '../../Icons/SettingIcons';
import FONT from '../../../constants/fonts';

import { Container, Content, Top, IconWrapper, Items, Item } from './style';

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

export default CharacterList;
