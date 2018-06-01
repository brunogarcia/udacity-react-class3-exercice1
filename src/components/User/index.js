import React from 'react';
import PropTypes from 'prop-types';
import types from '../../utils/types';

const User = (props) => {
  const { user, toggleGamesPlayed } = props;

  const {
    firstName,
    lastName,
    username,
    gamesPlayed,
  } = user;

  const renderGamesPlayed = () => {
    if (toggleGamesPlayed) {
      return <small>Played {gamesPlayed} games</small>;
    }

    return <small>Played * games</small>;
  };

  return (
    <li>
      {firstName} {lastName} <br />
      <small>{username}</small><br />
      {renderGamesPlayed()}
    </li>
  );
};

User.propTypes = {
  user: types.user.isRequired,
  toggleGamesPlayed: PropTypes.bool.isRequired,
};

export default User;
