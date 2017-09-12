import axios from 'axios';

import { API_URL, headers }from '../../utils/api';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_FULFILLED = 'FETCH_POSTS_FULFILLED';
export const FETCH_POSTS_REJECTED = 'FETCH_POSTS_REJECTED';

export const FETCH_POSTS_BY_CATEGORY = 'FETCH_POSTS_BY_CATEGORY';
export const FETCH_POSTS_BY_CATEGORY_FULFILLED = 'FETCH_POSTS_BY_CATEGORY_FULFILLED';
export const FETCH_POSTS_BY_CATEGORY_REJECTED = 'FETCH_POSTS_BY_CATEGORY_REJECTED';

export const FETCH_POST = 'FETCH_POST';
export const FETCH_POST_FULFILLED = 'FETCH_POST_FULFILLED';
export const FETCH_POST_REJECTED = 'FETCH_POST_REJECTED';

export const CREATE_POST = 'CREATE_POST';
export const CREATE_POST_REJECTED = 'CREATE_POST_REJECTED';

export const DELETE_POST = 'DELETE_POST';
export const DELETE_POST_REJECTED = 'DELETE_POST_REJECTED';

export const SELECT_SORT_VALUE = 'SELECT_SORT_VALUE';




export function fetchPosts() {
  return function(dispatch) {
    dispatch({type: FETCH_POSTS});
    axios.get(`${API_URL}/posts`, { headers: headers })
      .then((response) => {
        dispatch({type: FETCH_POSTS_FULFILLED, payload: response.data})
      })
      .catch((error) => {
        dispatch({type: FETCH_POSTS_REJECTED, payload: error})
      })
  }
}

export function fetchPostsByCategory(category) {
  return function(dispatch) {
    dispatch({type: FETCH_POSTS_BY_CATEGORY});
    axios.get(`${API_URL}/${category}/posts`, { headers: headers })
      .then((response) => {
        dispatch({type: FETCH_POSTS_BY_CATEGORY_FULFILLED, payload: response.data})
      })
      .catch((error) => {
        dispatch({type: FETCH_POSTS_BY_CATEGORY_REJECTED, payload: error})
    })
  }
}

export function fetchSinglePost(id) {
  return function(dispatch) {
    dispatch({type: FETCH_POST});
    axios.get(`${API_URL}/posts/${id}`, { headers: headers })
      .then((response) => {
        dispatch({type: FETCH_POST_FULFILLED, payload: response.data})
      })
      .catch((error) => {
        dispatch({type: FETCH_POST_REJECTED, payload: error})
      })
  }
}


export function createPost(postToSubmit, callback) {
  return function(dispatch) {
    axios.post(`${API_URL}/posts`, postToSubmit, { headers: headers })
      .then((response) => {
        dispatch({type: CREATE_POST, payload: response.data})
      })
      .catch((error) => {
        dispatch({type: CREATE_POST_REJECTED, payload: error})
      })
      .then(() => callback())
  }
}



export function deletePost(id, callback) {
  return function(dispatch) {
    axios.delete(`${API_URL}/posts/${id}`, { headers: headers })
      .then((response) => {
        dispatch({type: DELETE_POST, payload: id})
        //simply return id as payload, because that is really all we need to update application state
      })
      .then(() => callback())
  }
}


export function selectSortValue(sortValue) {
  return {
    type: SELECT_SORT_VALUE,
    payload: sortValue,
  }
}
