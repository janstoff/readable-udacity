import _ from 'lodash';

import {
  FETCH_POSTS,
  FETCH_POSTS_FULFILLED,
  FETCH_POSTS_REJECTED,
  FETCH_POSTS_BY_CATEGORY,
  FETCH_POSTS_BY_CATEGORY_FULFILLED,
  FETCH_POSTS_BY_CATEGORY_REJECTED,
  FETCH_POST,
  FETCH_POST_FULFILLED,
  FETCH_POST_REJECTED,
  CREATE_POST,
  EDIT_POST,
  DELETE_POST,
  SELECT_SORT_VALUE,
  VOTE_ON_POST
} from './postsActions';



const initialState = {
  fetching: false,
  fetched: false,
  posts: {},
  sortValue: "popularity",
  error: null,
};


export default function postsReducer(state=initialState, action) {
  switch (action.type) {
    case FETCH_POSTS: {
      return { ...state, fetching: true }
    }
    case FETCH_POSTS_FULFILLED: {
      return { ...state, fetching: false, fetched: true, posts: _.mapKeys(action.payload, 'id') }
    }
    case FETCH_POSTS_REJECTED: {
      return { ...state, fetching: false, error: action.payload }
    }
    case FETCH_POSTS_BY_CATEGORY: {
      return { ...state, fetching: true }
    }
    case FETCH_POSTS_BY_CATEGORY_FULFILLED: {
      return { ...state, fetching: false, fetched: true, posts: _.mapKeys(action.payload, 'id') }
    }
    case FETCH_POSTS_BY_CATEGORY_REJECTED: {
      return { ...state, fetching: false, error: action.payload }
    }
    case FETCH_POST: {
      return { ...state, fetching: true }
    }
    case FETCH_POST_FULFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        posts: {
           ...state.posts,
           [action.payload.id]: action.payload,
         }
       }
      // new post state is state.posts as per previous state with the exception of the current action.payload with will be saved under its id
      // in case the post already exists it will simply be overridden
    }
    case FETCH_POST_REJECTED: {
      return { ...state, fetching: false, error: action.payload }
    }
    case CREATE_POST: {
      return { ...state, posts: { ...state.posts, [action.payload.id]: action.payload } }
      //same as FETCH_POST
    }
    case EDIT_POST: {
      return { ...state, posts: { ...state.posts, [action.payload.id]: action.payload } }
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: {
           ...state.posts,
           [action.payload] : {
               ...state.posts[action.payload],
               deleted: true
           }
        }
      }
    }
    case SELECT_SORT_VALUE: {
      return { ...state, sortValue: action.payload }
    }
    case VOTE_ON_POST: {
      return {
        ...state,
        posts: {
           ...state.posts,
           [action.payload.id]: {
              ...state.posts[action.payload.id],
              voteScore: action.payload.voteScore
           }
        }
      }
    }
    default:
    return state;
  }
}
