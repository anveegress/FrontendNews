import axios from 'axios';
import { GET_NEWS } from '../types';

export const setNews = (payload) => ({ type: GET_NEWS, payload });

export const funcSetNews = () => (dispatch) => {
  axios.get('https://localhost:3001/news')
    .then((res) => dispatch(setNews(res.data)))
    .catch(console.log);
};
