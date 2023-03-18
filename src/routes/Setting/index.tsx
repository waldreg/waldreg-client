import { Routes, Route } from 'react-router-dom';
import UserSettingPage from './User';
import CharacterPage from './Character';
import BoardManagement from './Board';
import RewardSettingPage from './Reward';

const Setting = () => {
  return (
    <Routes>
      <Route path="/user" element={<UserSettingPage />} />
      <Route path="/character" element={<CharacterPage />} />
      <Route path="/reward" element={<RewardSettingPage />} />
      <Route path="/board" element={<BoardManagement />} />
    </Routes>
  );
};

export default Setting;
