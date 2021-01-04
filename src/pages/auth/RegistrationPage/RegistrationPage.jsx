/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../../../shared/components/Input/Input';
import Button from '../../../shared/components/Button/Button';
import ROUTES from '../../../shared/constants/paths/paths';
import './styles/RegistrationPage.scss';

export default class RegistrationPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: '',
      birthday: '',
      name: '',
      email: '',
      picture: '',
      error: '',
    };
  }

  onInputChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  doRegister = () => {
    const { login, password, birthday, name, email, picture } = this.state;
    const { history } = this.props;
    const { home } = ROUTES;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const isUserExist = Boolean(users.find((item) => item.login === login));

    if (isUserExist) {
      this.setState({ error: 'Such login is already exists' });
      return null;
    }

    const newUser = { login, password, birthday, name, email, picture };

    localStorage.setItem('users', JSON.stringify([...users, newUser]));
    sessionStorage.setItem('user', JSON.stringify(newUser));

    history.push(home.url);
    return null;
  };

  render() {
    const { login, password, birthday, name, email, picture, error } = this.state;

    return (
      <div className="registration-page">
        {error && <div>{error}</div>}
        <label htmlFor="login" className="registration-page__field">
          Login
          <Input
            id="login"
            className="registration-page__input"
            value={login}
            onChange={this.onInputChange}
            placeholder="login"
          />
        </label>
        <label htmlFor="login" className="registration-page__field">
          Password
          <Input
            id="password"
            className="registration-page__input"
            type="password"
            value={password}
            onChange={this.onInputChange}
            placeholder="password"
          />
        </label>
        <label htmlFor="login" className="registration-page__field">
          Name
          <Input
            id="name"
            className="registration-page__input"
            value={name}
            onChange={this.onInputChange}
            placeholder="name"
          />
        </label>
        <label htmlFor="login" className="registration-page__field">
          Email
          <Input
            id="email"
            type="email"
            className="registration-page__input"
            value={email}
            onChange={this.onInputChange}
            placeholder="email"
          />
        </label>
        <label htmlFor="login" className="registration-page__field">
          Birthday
          <Input
            id="birthday"
            type="date"
            className="registration-page__input"
            value={birthday}
            onChange={this.onInputChange}
            placeholder="birthday"
          />
        </label>
        <label htmlFor="login" className="registration-page__field">
          Profile picture
          <Input
            id="picture"
            className="registration-page__input"
            value={picture}
            onChange={this.onInputChange}
            placeholder="path to image"
          />
        </label>
        <Button isBright className="registration-page__button" onClick={this.doRegister}>
          Register
        </Button>
      </div>
    );
  }
}

RegistrationPage.propTypes = {
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};
