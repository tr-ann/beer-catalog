import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../../../Button/Button';
import cancelIcon from '../../../../images/sidebar/cancel.svg';
import homeIson from '../../../../images/sidebar/home.svg';
import starIson from '../../../../images/sidebar/star.svg';
import './styles/Sidebar.scss';
import ROUTES from '../../../../constants/paths/paths';

const Sidebar = ({ className, isHidden, currentPage, onClose }) => {
  const sidebarClass = classNames('sidebar', className, { sidebar_hidden: isHidden });

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
          <Link className="link" to={{ pathname: '/beer' }}>
            <img src={homeIson} alt="icon" className="link__icon" />
            Home
          </Link>
        </li>
        <li key="favorites" className="links-list__item">
          <Link className="link" to={{ pathname: '/favorites' }}>
            <img src={starIson} alt="icon" className="link__icon" />
            Favorites
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
