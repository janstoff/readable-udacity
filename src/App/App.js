import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

import Footer from './Footer'
import Header from './Header'
import MainPage from '../MainPage/MainPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <MainPage/>
        <Footer/>
      </div>
    );
  }
}

export default connect()(App);
