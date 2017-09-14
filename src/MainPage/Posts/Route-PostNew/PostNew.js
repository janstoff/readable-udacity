import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import './PostNew.css';

import { createPost } from '../postsActions';

const uuid = require('uuid/v4')



class PostNew extends Component {


  renderField(field) {
    // field argument contains eventhandlers which make sure the <Field/> element knows
    // it needs to deal with the input jsx in the renderField method.

    const { meta: { touched, error } } = field;
    // destructuring of nested meta properties off of field

    const className = `form-group ${touched && error ? 'has-danger' : ' '}`;

    return (

      <div className={className}>
        <input
          { ...field.input }
          // taking all event handlers and props of field and applying them to the input
          // (like onChange, onBlur, etc. instead of having to include multiple onSomething={field.input.onSomething} declarations within the <input/> element)
          type="text"
          placeholder={field.placeholder}
          className="form-control"
        />
        <div>
          {touched ? error : ' ' /*meta properties automatically added by validate | when touched shows error if there is one*/}
        </div>
      </div>
    )
  }

  renderDropDown(field) {

    const { meta: { touched, error } } = field;

    const className = `form-group ${touched && error ? 'has-danger' : ' '}`;

    return (
      <div className={className}>
        <select {...field.input}>
          <option>Select a category</option>
          <option value="react">React</option>
          <option value="redux">Redux</option>
          <option value="udacity">Udacity</option>
        </select>
        <div>
          {touched ? error : ' '}
        </div>
      </div>

    )
  }



  onSubmit(values) {
    values.id = uuid();
    values.timestamp = Date.now();
    this.props.dispatch(createPost(values, () => {
      this.props.history.push('/');
      // react router feature/prop which makes active routes available for navigation via history.push
      // push in callback to trigger navigation after the API call has completed in order to avoid race condition
    }));
  }


  render() {
    const { handleSubmit } = this.props;

    return (
            <div className="form-wrapper">
              <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
                  component={this.renderDropDown}
                />
                <Field
                  name="body"
                  placeholder="What is on your mind..."
                  component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
              <Link to='/' className="btn btn-secondary">back</Link>
            </div>
    )
  }
}


function validate(values) {
  // validate() is automatically called on any submit event
  //(values) = object with all values a user entered (console.log(values) ->
  //e.g. {title: 'Test', author: 'Jan', category: 'Tests', body: 'This is just a test...'})

  const errors = {};

  // validate the inputs from the 'values' object
  if (!values.title) {
    errors.title = "Please enter a title.";
  }
  if (!values.author) {
    errors.author = "Please let us know who you are.";
  }
  if (!values.category) {
    errors.category = "Please specify a category.";
  }
  if (!values.body || values.body.lenght < 3) {
    errors.body = "Sorry, what where you saying?";
  }

  return errors;
  // if validate(values) returns an errors object with any properities at all instead of the initialised empty object,
  // redux-form assumes the form is invalid
}

function mapStateToProps({ posts }, ownProps) {
  return { initialValues: posts.posts[ownProps.match.params.id] };
}


export default reduxForm({
  validate: validate,
  form: 'NewPostForm'
})(
  withRouter(connect(mapStateToProps)(PostNew)
));
