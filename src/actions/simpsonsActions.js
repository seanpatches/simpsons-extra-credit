import { createAction } from 'promise-middleware-redux';
import simpsonsAPI from '../services/simpsonsAPI';

export const [
  getSimpsons,
  GET_QUOTE,
  PENDING_QUOTE,
] = createAction('getSimpsons', simpsonsAPI);
