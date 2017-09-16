import React, {Component} from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

import { voteOnComment, deleteComment } from './commentsActions';
import { timeConverter } from '../../../utils/helpers';
import './Comments.css';


class Comments extends Component {


  onClickDelete(commentId) {
    const { post } = this.props;
    this.props.dispatch(deleteComment(commentId, () => {
      this.props.history.push(`/${post.category}/${post.id}`);
    }));
  }

  render() {
    const { post, comments } = this.props;

    return(
      <div>
        <Link to={`/${post.id}/newcomment`}>
          <button className="btn btn-default">add comment</button>
        </Link>

        <div className="comments-grid">
          {comments && _.map(comments, (comment) => {
            return(
              <div key={comment.id} className="comment">
                <div className="comment-author">{comment.author}</div>
                <div className="comment-date-time">{timeConverter(comment.timestamp)}</div>
                <div className="comment-content">{comment.body}</div>
                <div className="comment-rating">Rating:  {comment.voteScore}</div>

                <button className="btn btn-default upvote-comment" value="upVote" onClick={(event) => this.props.dispatch(voteOnComment(comment.id, event.target.value))}></button>
                <button className="btn btn-default downvote-comment" value="downVote" onClick={(event) => this.props.dispatch(voteOnComment(comment.id, event.target.value))}></button>

                <button
                  className="btn btn-danger delete-comment"
                  onClick={() => this.onClickDelete(comment.id)}
                  ></button>
                  
                <Link
                  to={`/${post.id}/${comment.id}/edit`}
                  className="btn btn-default edit-comment"
                  ></Link>

              </div>
            )
          }
          )}
        </div>
      </div>
    )
  }
}

export default withRouter(connect()(Comments));
