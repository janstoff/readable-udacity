import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { deletePost, voteOnPost } from './postsActions'
import { connect } from 'react-redux'
import _ from 'lodash'

import './PostDetail.css'
import { fetchCommentsById } from '../Comments/commentsActions'
import { timeConverter } from '../utils/helpers'

class Post extends Component {
	componentDidMount() {
		const { post } = this.props

		this.props.dispatch(fetchCommentsById(post.id))
	}

	onClickDelete(id) {
		this.props.dispatch(
			deletePost(id, () => {
				this.props.history.push('/')
			})
		)
	}

	render() {
		const { post, comments } = this.props

		let commentsPerPost = Object.keys(
			_.filter(comments, { parentId: post.id, deleted: false })
		).length

		return (
			<div key={post.id} className="post">
				<Link to={`/${post.category}/${post.id}`} className="post-title">
					{post.title}
				</Link>
				<div className="post-detail">
					<div className="post-created">
						<div className="post-author">Author: {post.author}</div>
						<div className="post-date-time">
							created: {timeConverter(post.timestamp)}
						</div>
					</div>
					<div className="post-no-of-comments">{commentsPerPost} Comments</div>
					<div className="post-rating">
						<div>Rating: {post.voteScore}</div>
						<div>
							<button
								className="btn btn-default upvote-post"
								value="upVote"
								onClick={event =>
									this.props.dispatch(voteOnPost(post.id, event.target.value))}>
								upvote
							</button>
							<button
								className="btn btn-default downvote-post"
								value="downVote"
								onClick={event =>
									this.props.dispatch(voteOnPost(post.id, event.target.value))}>
								downvote
							</button>
						</div>
					</div>
					<div className="post-actions">
						<button
							className="btn btn-danger delete-post"
							onClick={() => this.onClickDelete(post.id)}>
							Delete Post
						</button>
						<Link to={`/${post.id}/edit`} className="btn btn-default edit-post">
							Edit Post
						</Link>
					</div>
				</div>
				<div className="post-content">{post.body}</div>
			</div>
		)
	}
}

function mapStateToProps({ comments }) {
	return {
		comments: comments.comments
	}
}

export default withRouter(connect(mapStateToProps)(Post))
