import React, { Component } from 'react';
import PropTypes from 'prop-types';
import types from '../../utils/types';
import User from '../User/';
import ToggleGamesPlayed from '../ToggleGamesPlayed';
import './UserList.css';

const hideMessage = 'Hide the Number of Games Played';
const showMessage = 'Show the Number of Games Played';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleGamesPlayed: true,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  getMessage() {
    const { toggleGamesPlayed } = this.state;

    if (toggleGamesPlayed) {
      return hideMessage;
    }

    return showMessage;
  }

  handleToggle() {
    this.setState(currentState => ({ toggleGamesPlayed: !currentState.toggleGamesPlayed }));
  }

  render() {
    const { users } = this.props;
    const { toggleGamesPlayed } = this.state;

    if (users.length) {
      return (
        <div className="UserList-main">
          <h2>Users</h2>

          <ul>
            {users.map(user => (
              <User
                key={user.username}
                user={user}
                toggleGamesPlayed={toggleGamesPlayed}
              />
            ))}
          </ul>

          <ToggleGamesPlayed
            message={this.getMessage()}
            onToggle={this.handleToggle}
          />
        </div>
      );
    }

    return null;
  }
}

UserList.propTypes = {
  users: PropTypes.arrayOf(types.user).isRequired,
};

export default UserList;
