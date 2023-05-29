import React from "react";
import { useState } from "react";
import axios from "axios";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  // window.onload = function() {
  //   localStorage.clear();
  // };
  const initialToken = localStorage.getItem("accessToken");
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  axios.defaults.withCredentials = true;
  axios.interceptors.request.use((config) => {
    if (!config.headers) return config;
    if (token !== null) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("accessToken", token);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("accessToken");
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
