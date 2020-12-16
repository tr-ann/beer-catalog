import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../shared/components/Button/Button';
import Input from '../../../../shared/components/Input/Input';
import {
  INITIAL_ALCOHOL_BY_VOLUME,
  INITIAL_BITTERNESS_UNITS,
  INITIAL_COLOR_BY_EBC,
} from '../../../../shared/constants/beer/beerParams';
import searchIcon from '../../../../shared/images/search/search.svg';
import Filter from '../Filter/Filter';
import './styles/Search.scss';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      ibu: INITIAL_BITTERNESS_UNITS,
      abv: INITIAL_ALCOHOL_BY_VOLUME,
      ebc: INITIAL_COLOR_BY_EBC,
      isFilterHidden: true,
    };
  }

  onInputChange = (e) => {
    const { value } = e.target;
    this.setState({ inputValue: value });
  };

  onSliderChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  onSubmit = () => {
    const { inputValue, ibu, abv, ebc } = this.state;
    const { doSearchBeers } = this.props;

    const hideFilter = !inputValue;
    this.setState({ isFilterHidden: hideFilter });

    doSearchBeers({
      beer_name: inputValue,
      ibu_gt: ibu,
      abv_gt: abv,
      ebc_gt: ebc,
    });
  };

  render() {
    const { inputValue, isFilterHidden, ibu, abv, ebc } = this.state;

    return (
      <>
        <div className="search">
          <Input
            placeholder="Search beers..."
            value={inputValue}
            onChange={this.onInputChange}
            onSubmit={this.onSubmit}
          />
          <Button className="search__button" onClick={this.onSubmit}>
            <img src={searchIcon} alt="Search" className="search__icon" />
          </Button>
        </div>
        <Filter
          isHidden={isFilterHidden}
          onChange={this.onSliderChange}
          ibu={ibu}
          abv={abv}
          ebc={ebc}
        />
      </>
    );
  }
}

Search.propTypes = {
  doSearchBeers: PropTypes.func.isRequired,
};
