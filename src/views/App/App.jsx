import React, { Component } from 'react';
import Header from '../../components/App/Header/Header';

require('./App.scss');

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        {this.props.children}
      </div>
    );
  }
}
