import React from 'react';
import PropTypes from 'prop-types';

const ToggleGamesPlayed = (props) => {
  const { message, onToggle } = props;

  return (
    <button onClick={onToggle} type="button">
      {message}
    </button>
  );
};

ToggleGamesPlayed.propTypes = {
  message: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default ToggleGamesPlayed;
