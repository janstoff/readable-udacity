import axios from 'axios';

import { getAllCategories } from '../../utils/api';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_CATEGORIES_REJECTED = 'FETCH_CATEGORIES_REJECTED';
export const FETCH_CATEGORIES_FULFILLED = 'FETCH_CATEGORIES_FULFILLED';



export function fetchCategories() {
  return function(dispatch) {
    dispatch({type: FETCH_CATEGORIES});
    axios.get('http://localhost:5001/categories', { headers: {Authorization: 'janstoff'} })
      .then((response) => {
        dispatch({type: FETCH_CATEGORIES_FULFILLED, payload: response.data})
      })
      .catch((error) => {
        dispatch({type: FETCH_CATEGORIES_REJECTED, payload: error})
      })
  }
}
