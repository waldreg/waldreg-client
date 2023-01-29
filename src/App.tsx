import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyle';
import Login from './routes/Auth/Login';
import Home from './routes/Home';
import Character from './routes/Setting/Character';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/setting/character" element={<Character />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
