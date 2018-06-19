import React, { Component } from 'react';
import PropTypes from 'prop-types';

const showBlock = { display: 'block' };
const hideBlock = { display: 'none' };

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      gamesPlayed: 0,
    };

    this.handleAddUser = this.handleAddUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleAddUser(e) {
    e.preventDefault();
    const user = { ...this.state };
    const isValidUser = this.props.onAddUser(user);

    if (isValidUser) {
      this.clearForm();
    }
  }

  clearForm() {
    this.setState({
      firstName: '',
      lastName: '',
      username: '',
    });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value.trim(),
    });
  }

  isEmptyForm() {
    const values = Object.values(this.state);
    const checking = values.filter(value => value === '');
    return checking.length;
  }

  checkError() {
    const styles = { color: 'red' };
    return this.props.error ? { ...styles, ...showBlock } : hideBlock;
  }

  checkUserAdded() {
    const styles = { color: 'green' };
    return this.props.userAdded ? { ...styles, ...showBlock } : hideBlock;
  }

  render() {
    const { firstName, lastName, username } = this.state;

    return (
      <form onSubmit={this.handleAddUser}>
        <p style={this.checkError()}>
          Error: this username already exists.<br />
          Please choose another one.
        </p>

        <p style={this.checkUserAdded()}>
            User added correctly!
        </p>

        <p>
          <label htmlFor="firstName">
            First name <br />
            <input
              type="text"
              id="firstName"
              name="firstName"
              onChange={this.handleChange}
              value={firstName}
            />
          </label>
        </p>
        <p>
          <label htmlFor="lastName">
            Last name <br />
            <input
              type="text"
              id="lastName"
              name="lastName"
              onChange={this.handleChange}
              value={lastName}
            />
          </label>
        </p>
        <p>
          <label htmlFor="username">
            Username <br />
            <input
              type="text"
              id="username"
              name="username"
              onChange={this.handleChange}
              value={username}
            />
          </label>
        </p>

        <button disabled={this.isEmptyForm()} type="submit">
          Add user
        </button>
      </form>
    );
  }
}

AddUser.propTypes = {
  error: PropTypes.bool.isRequired,
  userAdded: PropTypes.bool.isRequired,
  onAddUser: PropTypes.func.isRequired,
};

export default AddUser;
