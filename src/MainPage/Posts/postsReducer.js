import {
  FETCH_POSTS,
  FETCH_POSTS_FULFILLED,
  FETCH_POSTS_REJECTED
} from './postsActions';



const initialState = {
  fetching: false,
  fetched: false,
  posts: [],
  error: null,
};


export default function postsReducer(state=initialState, action) {
  switch (action.type) {
    case FETCH_POSTS: {
      state = { ...state, fetching: true }
      break;
    }
    case FETCH_POSTS_FULFILLED: {
      state = { ...state, fetching: false, fetched: true, posts: action.payload }
      break;
    }
    case FETCH_POSTS_REJECTED: {
      state = { ...state, fetching: false, error: action.payload }
      break;
    }
  }
  return state;
}
