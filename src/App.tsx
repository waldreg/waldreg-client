import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import GlobalStyle from "./styles/GlobalStyle";
import Login from "./routes/Auth/Login";
import Home from "./routes/Home";
import Setting from "./routes/Setting";
import Board from "./routes/Board";
import Layout from "./components/global/Layout/index";
import Schedule from "./routes/Schedule";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/user/login" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/board/*" element={<Board />} />
            <Route path="/setting/*" element={<Setting />} />
            <Route path="/schedule/*" element={<Schedule />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
