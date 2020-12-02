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
      value: '',
      isFilterHidden: true,
    };
  }

  onChange = (e) => {
    this.setState({ value: e.target.value });
  };

  onSubmit = () => {
    const { value } = this.state;
    if (value) {
      this.setState({ isFilterHidden: false });
    }
  };

  render() {
    const { value, isFilterHidden } = this.state;

    return (
      <>
        <div className="search">
          <Input
            placeholder="Search beers..."
            value={value}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
          />
          <Button className="search__button" onClick={this.onSubmit}>
            <img src={searchIcon} alt="Search" className="search__icon" />
          </Button>
        </div>
        <Filter isHidden={isFilterHidden} />
      </>
    );
  }
}
