import React, { Component } from 'react';
import Button from '../../../Button/Button';
import Sidebar from '../Sidebar/Sidebar';
import menu from '../../../../images/header/menu.svg';
import menu2 from '../../../../images/header/menu2.png';
import './styles/PageHeader.scss';

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
          <Button onClick={this.onSwitchMenuState}>
            <img className="header__menu-icon" src={menu} alt="menu" />
          </Button>
          <span className="header__page-title">{currentPage}</span>
          <Button className="header__info-menu-button">
            <img className="header__menu-icon" src={menu2} alt="menu" />
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
