import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import './PostNew.css';

import { addPost } from '../postsActions';
//const uuid = require('uuid/v1')



class PostNew extends Component {

  renderField(field) {
    <div>
      <input
        { ...field.input }
        type="text"
        className="post-input"
      />
    </div>
  }

  render() {

    return (
            <div className="form-wrapper">
              <form className="create-post-form">
                <Field
                  name="title"
                  placeholder="Title"
                  component={this.renderField}
                />
                <Field
                  name="author"
                  placeholder="Author"
                  component={this.renderField}
                />
                <Field
                  name="category"
                  placeholder="Category"
                  component={this.renderField}
                />
                <Field
                  name="body"
                  placeholder="What is on your mind..."
                  component={this.renderField}
                />
                <button type='submit'>Submit</button>
              </form>
              <Link to='/'>back</Link>
            </div>
    )
  }
}




export default reduxForm({
  form: 'NewPostForm'
})
(connect()(withRouter(PostNew)));
