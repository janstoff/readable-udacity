import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

import { voteOnComment } from './commentsActions';
import { timeConverter } from '../../../utils/helpers';
import './Comments.css';


class Comments extends Component {

  render() {
    const { comments } = this.props;

    return(
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

              <button className="btn btn-danger delete-comment"></button>
              <button className="btn btn-default edit-comment"></button>

            </div>
          )
        }
        )}
      </div>


    )
  }
}

export default connect()(Comments);
