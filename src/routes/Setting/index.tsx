import { Routes, Route } from 'react-router-dom';
import Character from './Character';

const Setting = () => {
  return (
    <div>
      <Routes>
        <Route path="/character" element={<Character />} />
      </Routes>
    </div>
  );
};

export default Setting;
