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

    console.log(this.props)

    return (
      <div className="posts-wrapper">
        <div className="posts-grid">
          {this.props.posts && _.map(this.props.posts, (post) => {
             return (
               <div key={post.id} className="post">
                <Link to={`/post/${post.id}`} className="post-title">{post.title}</Link>
              </div>
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

function mapStateToProps({ posts }) {
  return {posts: posts.posts}
}



export default withRouter(connect(mapStateToProps)(Posts));
