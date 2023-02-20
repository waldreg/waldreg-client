import styled from 'styled-components';

import { Character } from '../../../interfaces/character';

import COLOR from '../../../constants/color';
import FONT from '../../../constants/fonts';

const CharacterRadio = ({
  data,
  selected,
  setSelected,
}: {
  data: Character[];
  selected: string;
  setSelected: any;
}) => {
  const handleChangeRadioBtn = (e: any) => {
    setSelected(e.target.value);
  };

  return (
    <CharItems>
      {data.map((character: Character) => {
        return (
          <RadioBox key={character.id}>
            <Radio
              key={character.id}
              type="radio"
              name={character.character_name}
              value={character.character_name}
              checked={selected === character.character_name}
              onChange={(e: any) => handleChangeRadioBtn(e)}
            />

            <Text style={FONT.SUBTITLE2}>{character.character_name}</Text>
          </RadioBox>
        );
      })}
    </CharItems>
  );
};

const CharItems = styled.div`
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const RadioBox = styled.label`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Radio = styled.input<{ checked: boolean }>`
  width: 20px;
  height: 20px;

  border: 2px solid
    ${(props) =>
      props.checked === true ? `${COLOR.GREEN4}` : `${COLOR.GRAY2}`};
  border-radius: 50%;

  background: ${(props) =>
    props.checked === true ? `${COLOR.GREEN4}` : 'white'};

  cursor: pointer;
`;

const Text = styled.div``;

export default CharacterRadio;
