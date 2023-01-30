import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import GlobalStyle from './styles/GlobalStyle';
import Login from './routes/Auth/Login';
import Home from './routes/Home';
import Setting from './routes/Setting';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/setting/*" element={<Setting />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
