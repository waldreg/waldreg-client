import { Routes, Route } from 'react-router-dom';
import Character from './Character';

const Setting = () => {
  return (
    <Routes>
      <Route path="/character" element={<Character />} />
    </Routes>
  );
};

export default Setting;
