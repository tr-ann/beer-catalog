import React, { Component } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './Search.css';
import searchIcon from './search.svg';

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
    const title = <img src={searchIcon} alt="search" />;

    return (
      <div className="search">
        <Input placeholder="Search beers..." value={value} onChange={this.onChange} />
        <Button title={title} onClick={this.onSubmit} />
      </div>
    );
  }
}
