import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import '../MainPage.css'

import { fetchCategories } from './categoriesActions'

class CategoryMenu extends Component {
	componentWillMount() {
		this.props.dispatch(fetchCategories())
	}

	render() {
		return (
			<div>
				{this.props.categories &&
					this.props.categories.map(category => (
						<Link
							to={category.name}
							className="btn category"
							key={category.name}
						>
							{category.name}
						</Link>
					))}
				<Link to="/" className="btn btn-secondary">
					all
				</Link>
			</div>
		)
	}
}

function mapStateToProps({ categories }) {
	return {
		categories: categories.categories.categories
	}
}

export default withRouter(connect(mapStateToProps)(CategoryMenu))
