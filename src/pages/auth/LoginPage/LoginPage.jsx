import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Input from '../../../shared/components/Input/Input';
import Button from '../../../shared/components/Button/Button';
import ROUTES from '../../../shared/constants/paths/paths';
import './styles/LoginPage.scss';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: '',
      error: '',
    };
  }

  onInputChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  doLogin = () => {
    const { login, password } = this.state;
    const { history } = this.props;
    const { home } = ROUTES;

    const users = JSON.parse(localStorage.getItem('users'));
    const user = users?.find((item) => item.login === login && item.password === password);

    if (!user) {
      this.setState({ error: 'Login or password is incorrect' });
      return null;
    }

    sessionStorage.setItem('user', JSON.stringify(user));
    history.push(home.url);
    return null;
  };

  render() {
    const { login, password, error } = this.state;
    const { registration } = ROUTES;

    return (
      <div className="login-page">
        {error && <div>{error}</div>}
        <Input
          id="login"
          className="login-page__input"
          value={login}
          onChange={this.onInputChange}
          onSubmit={() => {}}
          placeholder="login"
        />
        <Input
          id="password"
          className="login-page__input"
          type="password"
          value={password}
          onChange={this.onInputChange}
          onSubmit={() => {}}
          placeholder="password"
        />
        <div className="login-page__button-container">
          <Button isBright className="login-page__button" onClick={this.doLogin}>
            Login
          </Button>
          <Link to={registration.url}>
            <Button isBright className="login-page__button" onClick={() => {}}>
              Register
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};
