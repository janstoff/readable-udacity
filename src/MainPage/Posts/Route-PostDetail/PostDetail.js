import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../MainPage.css';

import { timeConverter } from '../../../utils/helpers';
import { fetchSinglePost } from '../postsActions';
//const uuid = require('uuid/v1')



class PostDetail extends Component {


  state = {
    post: {
    "id": "8xf0y6ziyjabvozdd253nd",
    "timestamp": 1467166872634,
    "title": "Udacity is the best place to learn React",
    "body": "Everyone says so after all.",
    "author": "thingtwo",
    "category": "react",
    "voteScore": 6,
    "deleted": false
    }
  }


  render() {

    console.log(this.props)

    return (
            <div className="post">
              <div className="post-title">{this.state.post.title}</div>
              <div className="post-author">{this.state.post.author}</div>
              <div className="post-date-time"> posted: {timeConverter(this.state.post.timestamp)}</div>
              <div className="post-content">{this.state.post.body}</div>
              <div className="post-interaction">
                <button>upvote</button>
                <button>downvote</button>
                <button>add comment</button>
              </div>
            </div>
    )
  }
}

function mapStateToProps({ posts }) {
  return {posts: posts.posts}
}



export default connect(mapStateToProps)(PostDetail);
