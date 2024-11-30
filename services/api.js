import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.SUPA_BASE_URL,
  headers: {
    apikey: process.env.SUPA_APIKEY,
    authorization: process.env.SUPA_AUTHORIZATION,
  },
});
