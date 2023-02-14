import { Routes, Route } from 'react-router-dom';
import UserSettingPage from './User';
import Character from './Character';

const Setting = () => {
  return (
    <Routes>
      <Route path="/user" element={<UserSettingPage />} />
      <Route path="/character" element={<Character />} />
    </Routes>
  );
};

export default Setting;
