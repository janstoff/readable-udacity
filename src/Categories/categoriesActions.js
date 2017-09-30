import axios from 'axios'

import { API_URL, headers } from '../utils/api'

import {
	FETCH_CATEGORIES,
	FETCH_CATEGORIES_FULFILLED,
	FETCH_CATEGORIES_REJECTED,
	SELECT_CATEGORY
} from '../utils/action-types'

export function fetchCategories() {
	return function(dispatch) {
		dispatch({ type: FETCH_CATEGORIES })
		axios
			.get(`${API_URL}/categories`, { headers: headers })
			.then(response => {
				dispatch({ type: FETCH_CATEGORIES_FULFILLED, payload: response.data })
			})
			.catch(error => {
				dispatch({ type: FETCH_CATEGORIES_REJECTED, payload: error })
			})
	}
}

export function selectCategory(category) {
	return {
		type: SELECT_CATEGORY,
		payload: category
	}
}
