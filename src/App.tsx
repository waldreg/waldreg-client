import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyle';
import Login from './routes/Auth/Login';
import Home from './routes/Home';
import Setting from './routes/Setting';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/setting/*" element={<Setting />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
