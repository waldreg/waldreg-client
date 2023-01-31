import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import GlobalStyle from "./styles/GlobalStyle";
import Login from "./routes/Auth/Login";
import Home from "./routes/Home";
import Board from "./routes/Board";
import Boards from "./routes/Boards";
import Setting from './routes/Setting';


const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/login" element={<Login />} />
            <Route path="/boards" element={<Boards />} />
            <Route path="/boards/:boardId" element={<Board />} />
            <Route path="/setting/*" element={<Setting />} />
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
