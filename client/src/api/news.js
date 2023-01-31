import { makeRequest } from './makeRequest';

const URL = '/post';

export const getNews = (config) => makeRequest({
  method: 'GET',
  url: URL,
  ...config,
});
