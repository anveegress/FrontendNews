import { GET_NEWS } from '../types';

export default function newsReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case GET_NEWS:
      return payload;
    default:
      return state;
  }
}
