import React from 'react';
import PropTypes from 'prop-types';
import Quote from './Quote';
import Load from './Load';

function QuoteWithButton({ clickFetch, quote }){
  return (
    <>
      <Quote quote={quote}/>
      <Load clickHandler={clickFetch} />
    </>
  );  
}

QuoteWithButton.propTypes = {
  clickFetch: PropTypes.func.isRequired,
  quote: PropTypes.object.isRequired
};

export default QuoteWithButton;
