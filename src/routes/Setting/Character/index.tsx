import { useCallback, useState } from 'react';
import CharacterList from '../../../components/character/CharacterList';
import CharacterSetting from '../../../components/character/CharacterSetting';
import CharacterUser from '../../../components/character/CharacterUser';

const Character = () => {
  const [char, setChar] = useState('Admin');

  const handleClickChangeChar = (name: string) => {
    setChar(name);
  };

  return (
    <>
      <CharacterList handleClickChangeChar={handleClickChangeChar} />
      <CharacterSetting name={char} setChar={setChar} />
      <CharacterUser />
    </>
  );
};

export default Character;
