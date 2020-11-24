import React, { Component } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './Search.css';

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
        <Input placeholder="Search beers..." value={value} onChange={this.onChange} />
        <Button bright title="Search" onClick={this.onSubmit} />
      </div>
    );
  }
}
