import React, { Component } from 'react';
import Header from './components/Header/';
import AddUser from './components/AddUser/';
import UserList from './components/UserList/';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      error: false,
      userAdded: false,
    };

    this.handleAddUser = this.handleAddUser.bind(this);
  }

  handleAddUser(user) {
    if (this.isValidUser(user)) {
      this.saveUser(user);
      return true;
    }

    this.setState({
      error: true,
      userAdded: false,
    });

    return false;
  }

  isValidUser({ username }) {
    const { users } = this.state;

    if (users.length) {
      const existUserWithSameUsername = users.filter(u => u.username === username);
      return existUserWithSameUsername.length === 0;
    }

    return true;
  }

  saveUser(user) {
    this.setState(currentState => ({
      users: [...currentState.users, user],
      error: false,
      userAdded: true,
    }));
  }

  render() {
    const { users, error, userAdded } = this.state;

    return (
      <div className="App">
        <Header />
        <AddUser
          error={error}
          userAdded={userAdded}
          onAddUser={this.handleAddUser}
        />
        <UserList users={users} />
      </div>
    );
  }
}

export default App;
