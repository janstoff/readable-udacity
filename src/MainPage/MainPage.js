import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './MainPage.css';

import CategoryMenu from './CategoryMenu/CategoryMenu';
import Posts from './Posts/Posts';





class MainPage extends Component {


  render() {
    return (
      <div className="wrapper">
          <div><h3>Categories</h3></div>
          <div><h3>Posts</h3></div>
          <CategoryMenu/>
          <Posts/>
      </div>
    )
  }
}




export default MainPage;
