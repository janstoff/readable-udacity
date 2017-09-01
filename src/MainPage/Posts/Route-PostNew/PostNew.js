import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './PostNew.css';

import { addPost } from '../postsActions';
//const uuid = require('uuid/v1')



class PostNew extends Component {


  render() {

    console.log(this.props)

    return (
            <div>
              <Link to='/'>back</Link>
              <form className="create-post-form"></form>
                <div className="create-post-details">
                  <input type="text" name="title" placeholder="Title"/>
                  <input type="text" name="author" placeholder="Author"/>
                  <input type="text" name="category" placeholder="Category"/>
                  <input type="textarea" name="body" placeholder="What is on your mind..."/>
                  <button>Submit</button>
                </div>
            </div>
    )
  }
}




export default connect()(PostNew);
