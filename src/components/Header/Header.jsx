import React, { Component } from 'react';
import Button from '../Button/Button';
import Sidebar from '../Sidebar/Sidebar';
import './Header.scss';
import menu from '../../shared/images/header/menu.svg';
import menu2 from '../../shared/images/header/menu2.png';

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

    return (
      <>
        <header className="header">
          <Button className="header__button" onClick={this.onSwitchMenuState}>
            <img src={menu} alt="menu" />
          </Button>
          <span className="header__page-title">{currentPage}</span>
          <Button className="header__button header__info-menu-button">
            <img src={menu2} alt="menu" />
          </Button>
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
