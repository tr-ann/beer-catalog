import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Section = ({ title, children, className, isBordered }) => {
  const sectionClasses = classNames('section', className);
  const sectionBodyClasses = classNames('section__body', {
    section__body_bordered: isBordered,
  });

  return (
    <div className={sectionClasses}>
      <h2>{title}</h2>
      <div className={sectionBodyClasses}>{children}</div>
    </div>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
    PropTypes.element,
  ]),
  className: PropTypes.string,
  isBordered: PropTypes.bool,
};

Section.defaultProps = {
  title: '',
  children: '',
  className: '',
  isBordered: false,
};
