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
  }


  render() {
    const { post } = this.props;
    const { id } = this.props.match.params;

    if (!this.props.post) {
      return <div>Loading...</div>
    }

    return (
          <div>

            <div key={post.id} className="post">
             <Link to={`/${post.category}/${post.id}`} className="post-title">{post.title}</Link>
             <div className="post-author">Author:   {post.author}</div>
             <div className="post-date-time">created:   {timeConverter(post.timestamp)}</div>
             <div># of Comments</div>
             <div>Rating:    {post.voteScore}</div>
             <div className="post-actions">
               <button
                 className="btn btn-danger delete-post"
                 onClick={this.onClickDelete.bind(this)}
                 >Delete Post
               </button>
               <Link to={`/${id}/edit`} className="btn btn-default edit-post">
                 Edit Post
               </Link>
             </div>
             <div className="post-content">{post.body}</div>
             <div className="post-voting">
               <button value="upVote" onClick={(event) => this.onClickVote(event.target.value)}>upvote</button>
               <button value="downVote" onClick={(event) => this.onClickVote(event.target.value)}>downvote</button>
             </div>
             <button>add comment</button>
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
