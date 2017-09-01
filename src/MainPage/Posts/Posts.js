import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../MainPage.css';

import { timeConverter } from '../../utils/helpers';
import { fetchPosts } from './postsActions';
//const uuid = require('uuid/v1')



class Posts extends Component {

  componentWillMount() {
    this.props.dispatch(fetchPosts())
  }

  render() {

    console.log(this.props)

    return (
      <div className="posts-wrapper">
        <div className="posts-grid">
          {this.props.posts && this.props.posts.map((post) => (
            <div key={post.id} className="post">
              <div className="post-title">{post.title}</div>
              <div className="post-author">{post.author}</div>
              <div className="post-date-time"> posted: {timeConverter(post.timestamp)}</div>
              <div className="post-content">{post.body}</div>
              <div className="post-interaction">
                <button>upvote</button>
                <button>downvote</button>
                <button>add comment</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

function mapStateToProps({ posts }) {
  return {posts: posts.posts}
}



export default connect(mapStateToProps)(Posts);
