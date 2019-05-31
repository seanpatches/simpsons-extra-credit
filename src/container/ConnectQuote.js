import QuoteWithButton from '../components/QuoteWithButton';
import { connect } from 'react-redux';
import { getQuote } from '../actions/simpsonsActions';
import { selectQuote, selectPending } from '../selectors/simpsonSelector';
import { withFetch } from './WithFetch';

const mapStateToProps = state => ({
  quote: selectQuote(state),
  loading: selectPending(state)
});

const mapDispatchToProps = dispatch => ({
  fetch(){
    return dispatch(getQuote());
  },
  clickFetch(event) {
    event.preventDefault();
    dispatch(getQuote());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFetch(QuoteWithButton));

