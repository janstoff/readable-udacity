import React, { Component } from 'react'

import { withRouter, Route, Switch } from 'react-router-dom'

import './App.css'

import Footer from './Footer'
import Header from './Header'
import MainPage from './MainPage'
import PostDetail from '../Posts/PostDetail'
import PostNewEdit from '../Posts/PostNewEdit'
import CommentNewEdit from '../Comments/CommentNewEdit'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Switch>
					<Route path="/posts/new" component={PostNewEdit} />
					<Route path="/:id/newcomment" component={CommentNewEdit} />
					<Route path="/:id/edit" component={PostNewEdit} />
					<Route path="/:id/:commentId/edit" component={CommentNewEdit} />
					<Route path="/:category/:id" component={PostDetail} />
					<Route path="/:category" component={MainPage} />
					<Route path="/" component={MainPage} />
				</Switch>
				<Footer />
			</div>
		)
	}
}

export default withRouter(App)
