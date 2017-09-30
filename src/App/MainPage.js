import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import './MainPage.css'
import CategoryMenu from '../Categories/CategoryMenu'
import Posts from '../Posts/Posts'

class MainPage extends Component {
	render() {
		return (
			<div className="wrapper">
				<div className="category-header">
					<h3>Categories</h3>
				</div>
				<div className="posts-header">
					<h3>Posts</h3>
				</div>
				<CategoryMenu />
				<Posts />
			</div>
		)
	}
}

export default withRouter(MainPage)
