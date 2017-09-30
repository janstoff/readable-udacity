import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import _ from 'lodash'

import Post from './Post'
import '../App/MainPage.css'
import { fetchPosts, selectSortValue } from './postsActions'

class Posts extends Component {
	componentWillMount() {
		this.props.dispatch(fetchPosts())
	}

	render() {
		const { category } = this.props.match.params
		const { sortValue, posts } = this.props

		let sortedPosts
		if (sortValue === 'latest') {
			sortedPosts = _.orderBy(posts, ['timestamp'], ['desc'])
		}
		if (sortValue === 'popularity') {
			sortedPosts = _.orderBy(posts, ['voteScore'], ['desc'])
		}

		let visiblePosts
		if (category) {
			visiblePosts = _.filter(sortedPosts, { category: category })
		} else {
			visiblePosts = sortedPosts
		}

		return (
			<div className="posts-wrapper">
				<div className="posts-filter">
					Sort by...
					<button
						className="btn btn-default"
						value="latest"
						onClick={event =>
							this.props.dispatch(selectSortValue(event.target.value))}
					>
						latest
					</button>
					<button
						className="btn btn-default"
						value="popularity"
						onClick={event =>
							this.props.dispatch(selectSortValue(event.target.value))}
					>
						popularity
					</button>
				</div>

				<div>
					{visiblePosts &&
						_.map(visiblePosts, post => {
							return <Post post={post} key={post.id} />
						})}
					<Link to="/posts/new">
						<button>add post</button>
					</Link>
				</div>
			</div>
		)
	}
}

function mapStateToProps({ posts, categories }) {
	return {
		posts: _.filter(posts.posts, { deleted: false }),
		sortValue: posts.sortValue
	}
}

export default withRouter(connect(mapStateToProps)(Posts))
