import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./routes/Auth/Login";
import Home from "./routes/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
