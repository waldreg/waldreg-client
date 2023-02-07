import Layout from '../../../components/global/Layout';
import CharacterList from '../../../components/character/CharacterList';
import CharacterSetting from '../../../components/character/CharacterSetting';
import CharacterUser from '../../../components/character/CharacterUser';

const Character = () => {
  return (
    <Layout>
      <CharacterList />
      <CharacterSetting />
      <CharacterUser />
    </Layout>
  );
};

export default Character;
