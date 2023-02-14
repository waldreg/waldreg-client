import axios from "axios";

const token = localStorage.getItem("accessToken");
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

waldregAxios.interceptors.request.use(
  (request) => {
    if (!!localStorage.getItem("accessToken")) {
      console.log(localStorage.getItem("accessToken"));
      request.headers["Authorization"] = `Bearer ${localStorage.getItem(
        "accessToken"
      )}`;
      request.headers["accept"] = "application/json";
    }
    return request;
  },
  (err) => Promise.reject(err)
);

waldregAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
