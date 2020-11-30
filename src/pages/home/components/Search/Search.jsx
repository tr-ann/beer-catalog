import React, { Component } from 'react';
import Button from '../../../../shared/components/Button/Button';
import Input from '../../../../shared/components/Input/Input';
import './Search.css';
import searchIcon from '../../../../shared/images/search/search.svg';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  onChange = (e) => {
    this.setState({ value: e.target.value });
  };

  onSubmit = () => {};

  render() {
    const { value } = this.state;

    return (
      <div className="search">
        <Input
          className="search__input"
          placeholder="Search beers..."
          value={value}
          onChange={this.onChange}
        />
        <Button className="search__button" onClick={this.onSubmit}>
          <img src={searchIcon} alt="Search" />
        </Button>
      </div>
    );
  }
}
