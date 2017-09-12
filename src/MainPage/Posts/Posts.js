import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

import '../MainPage.css';
import { fetchPosts, fetchPostsByCategory } from './postsActions';
import PostDetail from './Route-PostDetail/PostDetail';



class Posts extends Component {

  componentWillMount() {
    const { category } = this.props.match.params;

    if(category) {
      this.props.dispatch(fetchPostsByCategory(category))
    } else {
      this.props.dispatch(fetchPosts())
    }
  }

  render() {

    let visiblePosts
      if (this.props.selectedCategory !== ' ') {
        visiblePosts = _.filter(this.props.posts, { category:  this.props.selectedCategory });
      } else {
        visiblePosts = this.props.posts;
      }

    console.log(this.props.selectedCategory);

    return (
      <div className="posts-wrapper">
        <div className="posts-grid">
          {visiblePosts && _.map(visiblePosts, (post) => {
             return (
               <li key={post.id} className="post">
                <Link to={`/${post.category}/${post.id}`} className="post-title">{post.title}</Link>
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



function mapStateToProps({ posts, categories }) {
  return {
    posts: posts.posts,
    selectedCategory: categories.selectedCategory,
  }
}



export default withRouter(connect(mapStateToProps)(Posts));
