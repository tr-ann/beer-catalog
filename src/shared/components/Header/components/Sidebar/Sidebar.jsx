import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../../../Button/Button';
import ROUTES from '../../../../constants/paths/paths';
import cancelIcon from '../../../../images/sidebar/cancel.svg';
import homeIson from '../../../../images/sidebar/home.svg';
import starIson from '../../../../images/sidebar/star.svg';
import userIson from '../../../../images/sidebar/user.svg';
import './styles/Sidebar.scss';

const Sidebar = ({ className, isHidden, currentPage, onClose }) => {
  const sidebarClass = classNames('sidebar', className, { sidebar_hidden: isHidden });
  const { favorites, home, profile } = ROUTES;

  return (
    <div className={sidebarClass}>
      <header className="sidebar__header">
        {currentPage}
        <Button className="header__close-button" onClick={onClose} name="isSidebarHidden">
          <img src={cancelIcon} alt="close" className="close-button-icon" />
        </Button>
      </header>
      <ul className="sidebar__links-list">
        <li key="home" className="links-list__item">
          <Link className="link" to={{ pathname: home.url }}>
            <img src={homeIson} alt="icon" className="link__icon" />
            Home
          </Link>
        </li>
        <li key="favorites" className="links-list__item">
          <Link className="link" to={{ pathname: favorites.url }}>
            <img src={starIson} alt="icon" className="link__icon" />
            Favorites
          </Link>
        </li>
        <li key="profile" className="links-list__item">
          <Link className="link" to={{ pathname: profile.url }}>
            <img src={userIson} alt="icon" className="link__icon" />
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

Sidebar.propTypes = {
  className: PropTypes.string,
  isHidden: PropTypes.bool,
  currentPage: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

Sidebar.defaultProps = {
  className: '',
  isHidden: true,
  currentPage: ROUTES.home,
};
