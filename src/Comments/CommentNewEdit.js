import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'

import { createComment, editComment, fetchComment } from './commentsActions'

const uuid = require('uuid/v4')

class CommentNewEdit extends Component {
	componentDidMount() {
		const { commentId } = this.props.match.params

		if (commentId) {
				this.props.fetchComment(commentId).then(() => this.handleInitialize())
			}
	}

	handleInitialize() {
		const { comment } = this.props
		const initData = {
			author: comment.author,
			body: comment.body
		}
		this.props.initialize(initData)
	}

	renderField(field) {
		const { meta: { touched, error } } = field

		const className = `form-group ${touched && error ? 'has-danger' : ' '}`

		return (
			<div className={className}>
				<input
					{...field.input}
					type="text"
					placeholder={field.placeholder}
					className="form-control"
				/>
				<div>{touched ? error : ' '}</div>
			</div>
		)
	}

	onSubmit(values) {
		const { post, comment } = this.props
		if (comment) {
			values.id = comment.id
			values.parentId = post.id
			values.timestamp = Date.now()
			this.props.dispatch(
				editComment(values, () => {
					this.props.history.push(`/${post.category}/${post.id}`)
				})
			)
		} else {
			values.id = uuid()
			values.parentId = post.id
			values.timestamp = Date.now()
			this.props.dispatch(
				createComment(values, () => {
					this.props.history.push(`/${post.category}/${post.id}`)
				})
			)
		}
	}

	render() {
		const { post, handleSubmit, submitting, invalid } = this.props

		return (
			<div className="form-wrapper">
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					<Field
						name="author"
						placeholder="Author"
						component={this.renderField}
					/>

					<Field
						name="body"
						placeholder="What is on your mind..."
						component={this.renderField}
					/>
					<button
						type="submit"
						disabled={submitting || invalid}
						className="btn btn-primary"
					>
						Submit
					</button>
				</form>
				<button
					onClick={this.props.history.goBack}
					className="btn btn-secondary"
				>
					back
				</button>
			</div>
		)
	}
}

function validate(values) {
	const errors = {}

	if (!values.author) {
		errors.author = 'Please let us know who you are.'
	}
	if (!values.body || values.body.lenght < 3) {
		errors.body = 'Sorry, what where you saying?'
	}
	return errors
}

function mapStateToProps({ posts, comments }, ownProps) {
	return {
		post: posts.posts[ownProps.match.params.id],
		comment: comments.comments[ownProps.match.params.commentId]
	}
}

export default reduxForm({
	validate: validate,
	form: 'CommentForm'
})(withRouter(connect(mapStateToProps, { fetchComment })(CommentNewEdit)))
