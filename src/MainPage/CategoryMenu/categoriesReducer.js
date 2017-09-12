import {
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_FULFILLED,
  FETCH_CATEGORIES_REJECTED,
  SELECT_CATEGORY
} from './categoriesActions';



const initialState = {
  fetching: false,
  fetched: false,
  categories: [],
  selectedCategory: " ",
  error: null,
};


export default function categoriesReducer(state=initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES: {
      return  { ...state, fetching: true }
    }
    case FETCH_CATEGORIES_FULFILLED: {
      return  { ...state, fetching: false, fetched: true, categories: action.payload }
    }
    case FETCH_CATEGORIES_REJECTED: {
      return  { ...state, fetching: false, error: action.payload }
    }
    case SELECT_CATEGORY: {
      return { ...state, selectedCategory: action.payload }
    }
    default:
      return state;
  }
}
