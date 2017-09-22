import _ from 'lodash'

import {
	FETCH_COMMENTS,
	FETCH_COMMENTS_FULFILLED,
	FETCH_COMMENTS_REJECTED,
	FETCH_COMMENT,
	FETCH_COMMENT_FULFILLED,
	FETCH_COMMENT_REJECTED,
	DELETE_COMMENT,
	VOTE_ON_COMMENT
} from './commentsActions'

export default function commentsReducer(
	state = {
		comments: {},
		fetching: false,
		fetched: false,
		error: null
	},
	action
) {
	switch (action.type) {
		case FETCH_COMMENTS: {
			return {
				...state,
				fetching: true,
				fetched: false
			}
		}
		case FETCH_COMMENTS_FULFILLED: {
			return {
				...state,
				fetching: false,
				fetched: true,
				comments: {
					...state.comments,
					[action.payload.parentId]: action.payload
				}
			}
		}
		case FETCH_COMMENTS_REJECTED: {
			return {
				...state,
				fetching: false,
				error: action.payload
			}
		}
		case FETCH_COMMENT: {
			return { ...state, fetching: true }
		}
		case FETCH_COMMENT_FULFILLED: {
			return {
				...state,
				fetching: false,
				fetched: true,
				comments: {
					...state.comments,
					[action.payload.id]: action.payload
				}
			}
		}
		case FETCH_COMMENT_REJECTED: {
			return { ...state, fetching: false, error: action.payload }
		}
		case DELETE_COMMENT: {
			return {
				...state,
				comments: {
					...state.comments,
					[action.payload]: {
						...state.comments[action.payload],
						deleted: true
					}
				}
			}
		}
		case VOTE_ON_COMMENT: {
			return {
				...state,
				comments: {
					...state.comments,
					[action.payload.id]: {
						...state.comments[action.payload.id],
						voteScore: action.payload.voteScore
					}
				}
			}
		}
		default:
			return state
	}
}
