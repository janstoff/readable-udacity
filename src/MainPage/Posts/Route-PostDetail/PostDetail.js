import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../MainPage.css';

import { timeConverter } from '../../../utils/helpers';
import { fetchSinglePost } from '../postsActions';
//const uuid = require('uuid/v1')



class PostDetail extends Component {

  componentDidMount() {
    const { id } = this.props.match.params; //picking up the posts id from the URL with the help of react router
    this.props.dispatch(fetchSinglePost(id))
  }

  render() {

    if (!this.props.post) {
      return <div>Loading...</div>
    }

    return (
            <div className="post">
              <div className="post-title">{this.props.post.title}</div>
              <div className="post-author">{this.props.post.author}</div>
              <div className="post-date-time"> posted: {timeConverter(this.props.post.timestamp)}</div>
              <div className="post-content">{this.props.post.body}</div>
              <div className="post-interaction">
                <button>upvote</button>
                <button>downvote</button>
                <button>add comment</button>
              </div>
            </div>
    )
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts.posts[ownProps.match.params.id] };
}



export default connect(mapStateToProps)(PostDetail);
