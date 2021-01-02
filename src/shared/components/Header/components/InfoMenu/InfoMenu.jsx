import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Button from '../../../Button/Button';
import './styles/InfoMenu.scss';
import Section from '../../../Section/Section';
import ROUTES from '../../../../constants/paths/paths';

const InfoMenu = ({ className, isHidden }) => {
  const { login: loginPath } = ROUTES;
  const history = useHistory();

  const logout = () => {
    sessionStorage.removeItem('user');
    history.push(loginPath.url);
  };

  const classes = classNames('info-menu', className);
  return (
    <Section isBordered isHidden={isHidden} className={classes}>
      <Button className="section info-menu__item" onClick={logout}>
        Logout
      </Button>
    </Section>
  );
};

export default InfoMenu;

InfoMenu.propTypes = {
  className: PropTypes.string,
  isHidden: PropTypes.bool,
};

InfoMenu.defaultProps = {
  className: '',
  isHidden: false,
};
