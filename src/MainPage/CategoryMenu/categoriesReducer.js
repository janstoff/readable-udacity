import {
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_FULFILLED,
  FETCH_CATEGORIES_REJECTED
} from './categoriesActions';



const initialState = {
  fetching: false,
  fetched: false,
  categories: [],
  error: null,
};


export default function categoriesReducer(state=initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES: {
      state = { ...state, fetching: true }
      break;
    }
    case FETCH_CATEGORIES_FULFILLED: {
      state = { ...state, fetching: false, fetched: true, categories: action.payload }
      break;
    }
    case FETCH_CATEGORIES_REJECTED: {
      state = { ...state, fetching: false, error: action.payload }
      break;
    }
  }
  return state;
}
