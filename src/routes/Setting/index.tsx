import { Route, Routes } from "react-router-dom";

import BoardManagement from "./Board";
import CharacterPage from "./Character";
import JoiningPool from "./JoiningPool";
import RewardSettingPage from "./Reward";
import UserSettingPage from "./User";

const Setting = () => {
  return (
    <Routes>
      <Route path="/user" element={<UserSettingPage />} />
      <Route path="/character" element={<CharacterPage />} />
      <Route path="/reward" element={<RewardSettingPage />} />
      <Route path="/board" element={<BoardManagement />} />
      <Route path="/joiningpool" element={<JoiningPool />} />
    </Routes>
  );
};

export default Setting;
