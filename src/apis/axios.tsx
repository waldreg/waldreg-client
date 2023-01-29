import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_WALDREG_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Api-version': '1.0',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
