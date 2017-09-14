import React, { Component } from 'react';

import { withRouter,Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import Footer from './Footer';
import Header from './Header';
import MainPage from '../MainPage/MainPage';
import PostDetail from '../MainPage/Posts/Route-PostDetail/PostDetail';
import PostNewEdit from '../MainPage/Posts/Route-PostNewEdit/PostNewEdit';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/posts/new" component={PostNewEdit} />
          <Route path="/:id/edit" component={PostNewEdit} />
          <Route path="/:category/:id" component={PostDetail} />
          <Route path="/:category" component={MainPage} />
          <Route path="/" component={MainPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect()(App));
