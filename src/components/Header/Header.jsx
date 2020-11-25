import React, { Component } from 'react';
import Button from '../Button/Button';
import Sidebar from '../Sidebar/Sidebar';
import './Header.css';
import menu from './menu.svg';
import menu2 from './menu2.png';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isSidebarHidden: true };
  }

  onSwitchMenuState = () => {
    const { isSidebarHidden } = this.state;
    this.setState({ isSidebarHidden: !isSidebarHidden });
  };

  render() {
    const { currentPage } = this.props;
    const { isSidebarHidden } = this.state;
    const menuButtonTitle = <img src={menu} alt="menu" />;
    const infoButtonTitle = <img src={menu2} alt="menu" />;

    return (
      <>
        <header className="header">
          <Button
            className="header__button"
            title={menuButtonTitle}
            onClick={this.onSwitchMenuState}
          />
          <span className="header__page-title">{currentPage}</span>
          <Button className="header__button header__info-menu-button" title={infoButtonTitle} />
        </header>
        <Sidebar
          currentPage={currentPage}
          isHidden={isSidebarHidden}
          onClose={this.onSwitchMenuState}
        />
      </>
    );
  }
}
