import React from 'react';
import PropTypes from 'prop-types';
import types from '../../utils/types';
import User from '../User/';
import './UserList.css';

const UserList = (props) => {
  const { users } = props;

  if (users.length) {
    return (
      <div className="UserList-main">
        <h2>Users</h2>
        <ul>
          {users.map(user => <User key={user.username} user={user} />)}
        </ul>
      </div>
    );
  }

  return null;
};

UserList.propTypes = {
  users: PropTypes.arrayOf(types.user).isRequired,
};

export default UserList;
