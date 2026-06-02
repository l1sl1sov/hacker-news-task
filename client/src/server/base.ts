import axios from 'axios';

const baseURL = '/api/hn/';

export const api = axios.create({
  baseURL: baseURL,
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  if (config.url && !config.url.endsWith('.json')) {
    config.url = `${config.url}.json`;
  }
  return config;
}); //this interceptor is used because HACKER-NEWS requires .json at the end of every request