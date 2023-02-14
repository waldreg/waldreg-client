import { Routes, Route } from 'react-router-dom';
import UserSettingPage from './User';
import RewardSettingPage from './Reward';
import Character from './Character';

const Setting = () => {
  return (
    <Routes>
      <Route path="/user" element={<UserSettingPage />} />
      <Route path="/character" element={<Character />} />
      <Route path="/reward" element={<RewardSettingPage />} />
    </Routes>
  );
};

export default Setting;
