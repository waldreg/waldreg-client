import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import AuthContext from "./states/auth-context";
import Board from "./routes/Board";
import Error from "./routes/Error";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./routes/Home";
import JoiningPool from "./routes/Setting/JoiningPool";
import Layout from "./components/global/Layout/index";
import LoginForm from "./components/auth/login/LoginForm";
import { ReactQueryDevtools } from "react-query/devtools";
import RewardPage from "./routes/Reward";
import Schedule from "./routes/Schedule";
import Setting from "./routes/Setting";
import SignupForm from "./components/auth/signup/SignupForm";
import { useContext } from "react";
import useApiError from './hooks/error/useApiError';

const queryClient = new QueryClient();

function App() {
  const authCtx = useContext(AuthContext);
    
  const { handleError } = useApiError();
  queryClient.setDefaultOptions({
    queries: { onError: (error: any) => handleError(error) },
    mutations: {
      onError: (error: any) => {
        console.log('에러 app', error);
        handleError(error);
      },
    },
  });


  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          {authCtx.isLoggedIn ? (
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/board/*" element={<Board />} />
              <Route path="/setting/*" element={<Setting />} />
              <Route path="/schedule/*" element={<Schedule />} />
              <Route path="/joiningpool" element={<JoiningPool />} />
              <Route path="/reward" element={<RewardPage />} />
            </Route>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<SignupForm />} />
              <Route path="/login" element={<LoginForm />} />
            </>
          )}
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
