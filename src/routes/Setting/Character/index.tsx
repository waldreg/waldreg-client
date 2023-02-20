import { useState } from 'react';
import CharacterList from '../../../components/character/CharacterList';
import CharacterSetting from '../../../components/character/CharacterSetting';
import CharacterUser from '../../../components/character/CharacterUser';

const CharacterPage = () => {
  const [char, setChar] = useState('Admin');

  const handleClickChangeChar = (name: string) => {
    setChar(name);
  };

  return (
    <>
      <CharacterList
        name={char}
        handleClickChangeChar={handleClickChangeChar}
      />
      <CharacterSetting name={char} setChar={setChar} />
      <CharacterUser name={char} />
    </>
  );
};

export default CharacterPage;
