import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import GlobalStyle from "./styles/GlobalStyle";
import Login from "./routes/Auth/Login";
import Home from "./routes/Home";
import BoardCreate from "./routes/Board/BoardCreate";
import BoardList from "./routes/Board/BoardList/index";
import BoardDetail from "./routes/Board/BoardDetail/index";
import BoardUpdate from "./routes/Board/BoardUpdate";

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
            {/* TODO: board routes 합치기 */}
            <Route path="/board" element={<BoardList />} />
            <Route path="/board/create" element={<BoardCreate />} />
            <Route path="/board/:id" element={<BoardDetail />} />
            <Route path="/board/:id/update" element={<BoardUpdate />} />
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
