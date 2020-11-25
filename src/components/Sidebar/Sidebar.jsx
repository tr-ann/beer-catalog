import React from 'react';
import classNames from 'classnames';
import './Sidebar.css';
import cancelIson from './cancel.svg';
import Button from '../Button/Button';

export default function Sidebar({ classNames: classes, isHidden, currentPage, onClose }) {
  const sidebarClass = classNames('sidebar', classes, { sidebar_hidden: isHidden });
  const closeButtonTitle = <img src={cancelIson} alt="close" />;

  return (
    <div className={sidebarClass}>
      <header className="sidebar__header">
        {currentPage}
        <Button className="header__close-button" title={closeButtonTitle} onClick={onClose} />
      </header>
      <div className="sidebar__body" />
    </div>
  );
}
