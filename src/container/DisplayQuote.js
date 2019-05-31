import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Quote from '../components/Quote';
import Load from '../components/Load';
import { getQuote } from '../actions/simpsonsActions';
import { selectQuote, selectPending } from '../selectors/simpsonSelector';

class DisplayQuote extends PureComponent {
  static propTypes = {
    quote: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount(){
    this.props.fetch();
  }

  clickFetch = event => {
    event.preventDefault();
    this.props.fetch();
  }

  // clickFetch = () => {
  //   this.props.fetch();
  // }

  // clickFetch(){
  //   this.props.fetch();
  // }

  render(){
    const { quote, loading } = this.props;
    if(loading) return <h1>Loading</h1>;
    
    return (
    <>
      <Quote quote={quote} />
      <Load clickHandler={this.clickFetch} />
    </>
    );
  }
}

const mapStateToProps = state => ({
  quote: selectQuote(state),
  loading: selectPending(state)
});

const mapDispatchToProps = dispatch => ({
  fetch(){
    return dispatch(getQuote());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayQuote);

