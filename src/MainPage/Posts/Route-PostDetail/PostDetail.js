import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import '../../MainPage.css';
import Comments from '../Comments/Comments';
import { timeConverter } from '../../../utils/helpers';
import { fetchSinglePost, deletePost, voteOnPost } from '../postsActions';
import { fetchCommentsById } from '../Comments/commentsActions';



class PostDetail extends Component {


  componentDidMount() {
    const { id } = this.props.match.params;
    //picking up the posts id from the URL with the help of react router
    this.props.dispatch(fetchSinglePost(id));
    this.props.dispatch(fetchCommentsById(id));
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
    const { post, comments } = this.props;
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
             <div>{Object.keys(comments).length} Comments</div>
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
             <div>
               <button className="btn btn-default upvote-post" value="upVote" onClick={(event) => this.onClickVote(event.target.value)}>upvote</button>
               <button className="btn btn-default downvote-post" value="downVote" onClick={(event) => this.onClickVote(event.target.value)}>downvote</button>
             </div>
           </div>

            <Link to='/'>
             <button className="go-back btn btn-default"></button>
            </Link>

            <Comments
              post={post}
              comments={comments}
            />

          </div>
    )
  }
}

function mapStateToProps({ posts, comments }, ownProps) {
  return {
    post: posts.posts[ownProps.match.params.id] ,
    comments: _.orderBy(_.filter(comments.comments, { parentId: ownProps.match.params.id, deleted: false }), ['timestamp'], ['desc']),
  };
}



export default connect(mapStateToProps)(PostDetail);
