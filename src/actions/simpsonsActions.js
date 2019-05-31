import { createAction } from 'promise-middleware-redux';
import simpsonsAPI from '../services/simpsonsAPI';

export const [
  getQuote,
  GET_QUOTE,
  PENDING_QUOTE,
] = createAction('getQuote', simpsonsAPI);
