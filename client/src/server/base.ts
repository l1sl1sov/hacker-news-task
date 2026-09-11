import axios from 'axios';
import { APP_CONFIG } from '../constants/base';

export const api = axios.create({
  baseURL: APP_CONFIG.API_BASE_URL,
});

api.interceptors.request.use((config) => {
  if (config.url && !config.url.endsWith('.json')) {
    config.url = `${config.url}.json`;
  }
  return config;
});
//this interceptor is used because HACKER-NEWS requires .json at the end of every request
