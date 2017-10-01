import React, { Component } from 'react'
import './App.css'

class NotFound extends Component {
	render() {
		return (
			<div className="not-found">
				<span>Error 404: The URL you entered does not have any content. The Post or Comment you are looking for either does not exist or has been deleted.</span>
			</div>
		)
	}
}

export default NotFound
