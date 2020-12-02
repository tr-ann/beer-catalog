import React, { Component } from 'react';
import classNames from 'classnames';
import Slider from '../../../../shared/components/Slider/Slider';
import './styles/Filter.scss';

export default class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ibuSlider: '4.6',
      abvSlider: '50',
      ebcSlider: '60',
    };
  }

  onSliderChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  render() {
    const { ibuSlider, abvSlider, ebcSlider } = this.state;
    const { isHidden } = this.props;
    const classes = classNames('filter', { filter_hidden: isHidden });

    return (
      <div className={classes}>
        <h3 className="filter__title">Filter results</h3>
        <div className="filter__category">
          Alcohol by volume
          <Slider
            id="ibuSlider"
            min="2"
            max="14"
            step="0.1"
            value={ibuSlider}
            onChange={this.onSliderChange}
          />
        </div>
        <div className="filter__category">
          International Bitterness Units
          <Slider
            id="abvSlider"
            min="0"
            max="120"
            step="10"
            value={abvSlider}
            onChange={this.onSliderChange}
          />
        </div>
        <div className="filter__category">
          Color by EBC
          <Slider
            id="ebcSlider"
            min="4"
            max="80"
            step="1"
            value={ebcSlider}
            onChange={this.onSliderChange}
          />
        </div>
      </div>
    );
  }
}
