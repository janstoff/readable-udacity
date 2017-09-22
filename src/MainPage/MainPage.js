import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import './MainPage.css'
import CategoryMenu from './CategoryMenu/CategoryMenu'
import Posts from './Posts/Posts'

class MainPage extends Component {
	render() {
		return (
			<div className="wrapper">
				<div>
					<h3>Categories</h3>
				</div>
				<div>
					<h3>Posts</h3>
				</div>
				<CategoryMenu />
				<Posts />
			</div>
		)
	}
}

export default withRouter(MainPage)
