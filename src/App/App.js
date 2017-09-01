import React, { Component } from 'react';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import Footer from './Footer';
import Header from './Header';
import MainPage from '../MainPage/MainPage';
import PostDetail from '../MainPage/Posts/Route-PostDetail/PostDetail';
import PostNew from '../MainPage/Posts/Route-PostNew/PostNew';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" render={() => (<MainPage />)} />
        <Route path="/posts/:id" component={PostDetail} />
        <Route path="/posts/new" component={PostNew} />
        <Footer />
      </div>
    );
  }
}

export default connect()(App);
