import { Routes, Route } from 'react-router-dom';
import UserSettingPage from './User';
import CharacterPage from './Character';

const Setting = () => {
  return (
    <Routes>
      <Route path="/user" element={<UserSettingPage />} />
      <Route path="/character" element={<CharacterPage />} />
    </Routes>
  );
};

export default Setting;
