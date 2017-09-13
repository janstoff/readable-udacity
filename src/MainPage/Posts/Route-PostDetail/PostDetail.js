import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../MainPage.css';

import { timeConverter } from '../../../utils/helpers';
import { fetchSinglePost, deletePost, voteOnPost } from '../postsActions';
//const uuid = require('uuid/v1')



class PostDetail extends Component {


  componentDidMount() {
    const { id } = this.props.match.params;
    //picking up the posts id from the URL with the help of react router
    this.props.dispatch(fetchSinglePost(id));
  }

  onClickDelete() {
    const { id } = this.props.match.params;
    this.props.dispatch(deletePost(id, () => {
      this.props.history.push('/');
      //callback for navigation back to MainPage - called by .then(() => callback()) in postsActions
    }));
  }

  onClickVote(vote) {
    const { id } = this.props.match.params;
    this.props.dispatch(voteOnPost(id, vote));
    console.log(id, vote);
  }


  render() {

    if (!this.props.post) {
      return <div>Loading...</div>
    }

    return (
          <div>
            <button
              className="btn btn-danger pull-right"
              onClick={this.onClickDelete.bind(this)}
              >Delete Post
            </button>
            <div className="post">
              <div className="post-title">{this.props.post.title}</div>
              <div className="post-author">{this.props.post.author}</div>
              <div className="post-date-time"> posted: {timeConverter(this.props.post.timestamp)}</div>
              <div className="post-content">{this.props.post.body}</div>
              <div className="post-interaction">
                <button value="upVote" onClick={(event) => this.onClickVote(event.target.value)}>upvote</button>
                <button value="downVote" onClick={(event) => this.onClickVote(event.target.value)}>downvote</button>
                <button>add comment</button>
              </div>
            </div>
            <Link to='/'>back</Link>
          </div>
    )
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts.posts[ownProps.match.params.id] };
}



export default connect(mapStateToProps)(PostDetail);
