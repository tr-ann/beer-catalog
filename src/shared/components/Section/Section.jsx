import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles/Section.scss';

const Section = ({ title, children, className, isBordered, isSmall }) => {
  const sectionClasses = classNames('section', className, {
    section_small: isSmall,
  });
  const sectionBodyClasses = classNames('section__body', {
    section__body_bordered: isBordered,
  });

  return (
    <div className={sectionClasses}>
      {title && <h2 className="section__title">{title}</h2>}
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
  isSmall: PropTypes.bool,
};

Section.defaultProps = {
  title: '',
  children: '',
  className: '',
  isBordered: false,
  isSmall: false,
};
