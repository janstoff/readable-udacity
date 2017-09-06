import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

import '../MainPage.css';
import { fetchPosts } from './postsActions';
import PostDetail from './Route-PostDetail/PostDetail';



class Posts extends Component {

  componentWillMount() {
    this.props.dispatch(fetchPosts())
  }

  render() {

    console.log(Object.keys(this.props.posts))

    //let visiblePosts = Object.keys(this.props.posts).filter(post => post.category == this.props.selectedCategory);

    return (
      <div className="posts-wrapper">
        <div className="posts-grid">
          {this.props.posts && _.map(this.props.posts, (post) => {
             return (
               <li key={post.id} className="post">
                <Link to={`/posts/${post.id}`} className="post-title">{post.title}</Link>
              </li>
             )
          })}
          <Link to="/posts/new">
            <button>add post</button>
          </Link>
        </div>
      </div>
    )
  }
}



function mapStateToProps({ posts, selectedCategory }) {
  return {
    posts: posts.posts,
    selectedCategory: selectedCategory,
  }
}



export default withRouter(connect(mapStateToProps)(Posts));
