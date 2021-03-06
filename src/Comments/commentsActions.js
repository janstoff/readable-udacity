import axios from 'axios'

import { API_URL, headers } from '../utils/api'

import {
	FETCH_COMMENT,
	FETCH_COMMENT_FULFILLED,
	FETCH_COMMENT_REJECTED,
	FETCH_COMMENTS,
	FETCH_COMMENTS_FULFILLED,
	FETCH_COMMENTS_REJECTED,
	CREATE_COMMENT,
	CREATE_COMMENT_REJECTED,
	EDIT_COMMENT,
	EDIT_COMMENT_REJECTED,
	DELETE_COMMENT,
	VOTE_ON_COMMENT
} from '../utils/action-types'

export function fetchCommentsById(postId) {
	return function(dispatch) {
		dispatch({ type: FETCH_COMMENTS })
		axios
			.get(`${API_URL}/posts/${postId}/comments`, { headers: headers })
			.then(response => {
				dispatch({ type: FETCH_COMMENTS_FULFILLED, payload: response.data })
			})
			.catch(error => {
				dispatch({ type: FETCH_COMMENTS_REJECTED, payload: error })
			})
	}
}

export function fetchComment(commentId) {
	return function(dispatch) {
		dispatch({ type: FETCH_COMMENT })
		return axios
			.get(`${API_URL}/comments/${commentId}`, { headers: headers })
			.then(response => {
				dispatch({ type: FETCH_COMMENT_FULFILLED, payload: response.data })
				console.log(response.data)
			})
			.catch(error => {
				dispatch({ type: FETCH_COMMENT_REJECTED, payload: error })
			})
	}
}

export function createComment(commentToSubmit, callback) {
	return function(dispatch) {
		axios
			.post(`${API_URL}/comments`, commentToSubmit, { headers: headers })
			.then(response => {
				dispatch({ type: CREATE_COMMENT, payload: response.data })
			})
			.catch(error => {
				dispatch({ type: CREATE_COMMENT_REJECTED, payload: error })
			})
			.then(() => callback())
	}
}

export function editComment(commentToEdit, callback) {
	return function(dispatch) {
		axios
			.put(`${API_URL}/comments/${commentToEdit.id}`, commentToEdit, {
				headers: headers
			})
			.then(response => {
				dispatch({ type: EDIT_COMMENT, payload: response.data })
			})
			.catch(error => {
				dispatch({ type: EDIT_COMMENT_REJECTED, payload: error })
			})
			.then(() => callback())
	}
}

export function deleteComment(commentId, callback) {
	return function(dispatch) {
		axios
			.delete(`${API_URL}/comments/${commentId}`, { headers: headers })
			.then(response => {
				dispatch({ type: DELETE_COMMENT, payload: commentId })
			})
			.then(() => callback())
	}
}

export function voteOnComment(commentId, vote) {
	return function(dispatch) {
		axios
			.post(
				`${API_URL}/comments/${commentId}`,
				{ option: vote },
				{ headers: headers }
			)
			.then(response => {
				dispatch({ type: VOTE_ON_COMMENT, payload: response.data })
			})
	}
}
