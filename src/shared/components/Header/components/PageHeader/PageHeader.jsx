import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../Button/Button';
import Sidebar from '../Sidebar/Sidebar';
import menu from '../../../../images/header/menu.svg';
import menu2 from '../../../../images/header/menu2.png';
import './styles/PageHeader.scss';
import ROUTES from '../../../../constants/paths/paths';
import InfoMenu from '../InfoMenu/InfoMenu';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarHidden: true,
      isInfoMenuHidden: true,
    };
  }

  onSwitchMenuState = (name) => {
    const { [name]: menuState } = this.state;
    this.setState({ [name]: !menuState });
  };

  render() {
    const { currentPage } = this.props;
    const { isSidebarHidden, isInfoMenuHidden } = this.state;

    return (
      <>
        <header className="header">
          <Button
            className="header__button"
            name="isSidebarHidden"
            onClick={() => this.onSwitchMenuState('isSidebarHidden')}
          >
            <img className="header__menu-icon" src={menu} alt="menu" />
          </Button>
          <span className="header__page-title">{currentPage}</span>
          <Button
            className="header__button header__info-menu-button"
            name="isInfoMenuHidden"
            onClick={() => this.onSwitchMenuState('isInfoMenuHidden')}
          >
            <img className="header__menu-icon" src={menu2} alt="menu" />
          </Button>
        </header>
        <Sidebar
          currentPage={currentPage}
          isHidden={isSidebarHidden}
          onClose={() => this.onSwitchMenuState('isSidebarHidden')}
        />
        <InfoMenu isHidden={isInfoMenuHidden} />
      </>
    );
  }
}

Header.propTypes = {
  currentPage: PropTypes.string,
};

Header.defaultProps = {
  currentPage: ROUTES.home,
};
