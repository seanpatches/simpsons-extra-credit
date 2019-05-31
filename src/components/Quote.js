import React from 'react';
import PropTypes from 'prop-types';

function Quote({ quote }) {
  return (
    <>
      <h1>{quote.character}</h1>
      <img src={quote.image}/>
      <h2>{quote.quote}</h2>
    </>
  );
}

Quote.propTypes = {
  quote: PropTypes.object.isRequired
};

export default Quote;
