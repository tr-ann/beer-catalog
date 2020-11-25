import React, { Component } from 'react';
import Button from '../Button/Button';
import './Header.css';
import menu from './menu.svg';
import menu2 from './menu2.png';

export default class Header extends Component {
  onSwitchMenuState = () => {};

  render() {
    const { currentPage } = this.props;
    const menuButtonTitle = <img src={menu} alt="menu" />;
    const infoButtonTitle = <img src={menu2} alt="menu" />;

    return (
      <header className="header">
        <Button
          className="header__button"
          title={menuButtonTitle}
          onClick={this.onSwitchMenuState}
        />
        <span className="header__page-title">{currentPage}</span>
        <Button className="header__button header__info-menu-button" title={infoButtonTitle} />
      </header>
    );
  }
}
