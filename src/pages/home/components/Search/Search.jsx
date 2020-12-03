import React, { Component } from 'react';
import Button from '../../../../shared/components/Button/Button';
import Input from '../../../../shared/components/Input/Input';
import searchIcon from '../../../../shared/images/search/search.svg';
import Filter from '../Filter/Filter';
import './styles/Search.scss';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      ibu: '50',
      abv: '4.6',
      ebc: '60',
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

    if (inputValue) {
      this.setState({ isFilterHidden: false });

      doSearchBeers({
        beer_name: inputValue,
        ibu_lt: ibu,
        abv_lt: abv,
        ebc_lt: ebc,
      });
    }
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
