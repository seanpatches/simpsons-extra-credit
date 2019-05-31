import { GET_QUOTE, PENDING_QUOTE } from '../actions/simpsonsActions';

const initialState = {
  quote: {
    character: '',
    quote: '',
    image: '',
  },
  loading: false
};

export default function reducer(state = initialState, action){
  switch(action.type){
    case GET_QUOTE: 
      return { ...state, quote: action.payload, loading: false };
    case PENDING_QUOTE: 
      return { ...state, loading: true };
    default : return state;
  }
}
