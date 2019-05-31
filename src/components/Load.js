import React from 'react';
import PropTypes from 'prop-types';

function Load({ clickHandler }) {
  return <button onClick={clickHandler}>New Quote</button>;
}

Load.propTypes = {
  clickHandler: PropTypes.func.isRequired
};

export default Load;
