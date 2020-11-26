import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Button from '../Button/Button';
import './Sidebar.css';
import cancelIcon from '../../shared/images/sidebar/cancel.svg';
import homeIson from '../../shared/images/sidebar/home.svg';
import starIson from '../../shared/images/sidebar/star.svg';

export default function Sidebar({ classNames: classes, isHidden, currentPage, onClose }) {
  const sidebarClass = classNames('sidebar', classes, { sidebar_hidden: isHidden });

  return (
    <div className={sidebarClass}>
      <header className="sidebar__header">
        {currentPage}
        <Button className="header__close-button" onClick={onClose}>
          <img src={cancelIcon} alt="close" />
        </Button>
      </header>
      <ul className="sidebar__links-list">
        <li key="home">
          <Link className="links-list__link" to={{ pathname: '/beer' }}>
            <img src={homeIson} alt="icon" />
            <span>Home</span>
          </Link>
        </li>
        <li key="favorites">
          <Link className="links-list__link" to={{ pathname: '/favorites' }}>
            <img src={starIson} alt="icon" />
            Favorites
          </Link>
        </li>
      </ul>
    </div>
  );
}
