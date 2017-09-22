import axios from 'axios'

import { API_URL, headers } from '../../../utils/api'

export const FETCH_COMMENTS = 'FETCH_COMMENTS'
export const FETCH_COMMENTS_FULFILLED = 'FETCH_COMMENTS_FULFILLED'
export const FETCH_COMMENTS_REJECTED = 'FETCH_COMMENTS_REJECTED'

export const FETCH_COMMENT = 'FETCH_COMMENT'
export const FETCH_COMMENT_FULFILLED = 'FETCH_COMMENT_FULFILLED'
export const FETCH_COMMENT_REJECTED = 'FETCH_COMMENT_REJECTED'

export const CREATE_COMMENT = 'CREATE_COMMENT'
export const CREATE_COMMENT_REJECTED = 'CREATE_COMMENT_REJECTED'

export const EDIT_COMMENT = 'EDIT_COMMENT'
export const EDIT_COMMENT_REJECTED = 'EDIT_COMMENT_REJECTED'

export const DELETE_COMMENT = 'DELETE_COMMENT'

export const VOTE_ON_COMMENT = 'VOTE_ON_COMMENT'

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
		axios
			.get(`${API_URL}/comments/${commentId}`, { headers: headers })
			.then(response => {
				dispatch({ type: FETCH_COMMENT_FULFILLED, payload: response.data })
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
