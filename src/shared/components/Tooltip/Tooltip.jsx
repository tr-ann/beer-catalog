import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles/Tooltip.scss';

export default class Tooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  showTooltip = () => {
    this.setState({ isVisible: true });
  };

  hideTooltip = () => {
    this.setState({ isVisible: false });
  };

  render() {
    const { children, content, position, className } = this.props;
    const { isVisible } = this.state;
    const classes = classNames('tooltip', className, `position_${position}`);

    return (
      <div className="tooltip-wrapper">
        {isVisible && <div className={classes}>{content}</div>}
        <span onMouseEnter={this.showTooltip} onMouseLeave={this.hideTooltip}>
          {children}
        </span>
      </div>
    );
  }
}

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  className: PropTypes.string,
};

Tooltip.defaultProps = {
  position: 'top',
  className: '',
};
