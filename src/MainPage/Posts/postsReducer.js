import _ from 'lodash';

import {
  FETCH_POSTS,
  FETCH_POSTS_FULFILLED,
  FETCH_POSTS_REJECTED,
  FETCH_POST,
  FETCH_POST_FULFILLED,
  FETCH_POST_REJECTED,
  CREATE_POST,
  DELETE_POST
} from './postsActions';



const initialState = {
  fetching: false,
  fetched: false,
  posts: {},
  error: null,
};


export default function postsReducer(state=initialState, action) {
  switch (action.type) {
    case FETCH_POSTS: {
      state = { ...state, fetching: true }
      break;
    }
    case FETCH_POSTS_FULFILLED: {
      state = { ...state, fetching: false, fetched: true, posts: _.mapKeys(action.payload, 'id') }
      break;
    }
    case FETCH_POSTS_REJECTED: {
      state = { ...state, fetching: false, error: action.payload }
      break;
    }
    case FETCH_POST: {
      state = { ...state, fetching: true }
      break;
    }
    case FETCH_POST_FULFILLED: {
      state = { ...state, fetching: false, fetched: true, posts: { ...state.posts, [action.payload.id]: action.payload } }
      // new post state is state.posts as per previous state with the exception of the current action.payload with will be saved under its id
      // in case the post already exists it will simply be overridden
      break;
    }
    case FETCH_POST_REJECTED: {
      state = { ...state, fetching: false, error: action.payload }
      break;
    }
    case CREATE_POST: {
      state = { ...state, posts: { ...state.posts, [action.payload.id]: action.payload } }
      break;
    }
    case DELETE_POST: {
      state = { ...state, posts: _.omit(state.posts, action.payload) }
      break;
    }
  }
  return state;
}
