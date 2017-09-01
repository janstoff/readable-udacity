import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import './PostNew.css';

import { addPost } from '../postsActions';
//const uuid = require('uuid/v1')



class PostNew extends Component {


  render() {

    console.log(this.props)

    return (
            <div className="form-wrapper">
              <form className="create-post-form">
                <div className="create-post-details">
                  <input className="post-input" type="text" name="title" placeholder="Title"/>
                  <input className="post-input" type="text" name="author" placeholder="Author"/>
                  <input className="post-input" type="text" name="category" placeholder="Category"/>
                  <input className="post-body" type="textarea" name="body" placeholder="What is on your mind..."/>
                  <button>Submit</button>
                </div>
              </form>
              <Link to='/'>back</Link>
            </div>
    )
  }
}




export default withRouter(connect()(PostNew));
