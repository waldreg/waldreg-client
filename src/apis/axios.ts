import axios from "axios";

const token = localStorage.getItem("accessToken");
console.log(token);
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export const waldregAxios = axios.create({
  baseURL: process.env.REACT_APP_WALDREG_BASE_URL,
  headers: {
    Accept: "application/json;charset=utf-8",
    "Api-version": "1.0",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
  withCredentials: false,
});
