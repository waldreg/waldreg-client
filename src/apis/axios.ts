import axios from "axios";

export const waldregAxios = axios.create({
  baseURL: process.env.REACT_APP_WALDREG_BASE_URL,
  headers: {
    Accept: "application/json;charset=utf-8",
    "Api-version": "1.0",
    "Content-Type": "application/json",
  },
});
