import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./styles/GlobalStyle";
import Login from "./routes/Auth/Login";
import SignUp from "./routes/Auth/SignUp";
import Home from "./routes/Home";
import Setting from "./routes/Setting";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/signup" element={<SignUp />} />
          <Route path="/setting/*" element={<Setting />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
