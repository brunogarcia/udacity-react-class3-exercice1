import React from 'react';
import types from '../../utils/types';

const User = (props) => {
  const {
    firstName,
    lastName,
    username,
    gamesPlayed,
  } = props.user;

  return (
    <li>
      {firstName} {lastName} <br />
      <small>{username}</small><br />
      <small>Played {gamesPlayed} games</small>
    </li>
  );
};

User.propTypes = {
  user: types.user.isRequired,
};

export default User;
