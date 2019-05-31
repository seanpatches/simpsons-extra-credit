import React from 'react';

function Quote({ quote }) {
  return (
    <>
      <h1>{quote.character}</h1>
      <img src={quote.image}/>
      <h2>{quote.quote}</h2>
    </>
  );
}
