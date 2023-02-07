import { useState } from 'react';

import Layout from '../../../components/global/Layout';
import CharacterList from '../../../components/character/CharacterList';
import CharacterSetting from '../../../components/character/CharacterSetting';
import CharacterUser from '../../../components/character/CharacterUser';

const Character = () => {
  const [char, setChar] = useState('Admin');

  const handleClickChangeChar = (name: string) => {
    setChar(name);
  };

  return (
    <Layout>
      <CharacterList handleClickChangeChar={handleClickChangeChar} />
      <CharacterSetting name={char} />
      <CharacterUser />
    </Layout>
  );
};

export default Character;
