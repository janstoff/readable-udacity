import axios from 'axios';

import { API_URL, headers }from '../../../utils/api';


export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const FETCH_COMMENTS_FULFILLED = 'FETCH_COMMENTS_FULFILLED';
export const FETCH_COMMENTS_REJECTED = 'FETCH_COMMENTS_REJECTED';

export const VOTE_ON_COMMENT = 'VOTE_ON_COMMENT';



export function fetchCommentsById(postId) {
  return function(dispatch) {
    dispatch({type: FETCH_COMMENTS});
    axios.get(`${API_URL}/posts/${postId}/comments`, { headers: headers })
      .then((response) => {
        dispatch({type: FETCH_COMMENTS_FULFILLED, payload: response.data})
      })
      .catch((error) => {
        dispatch({type: FETCH_COMMENTS_REJECTED, payload: error})
      })
  }
}


export function voteOnComment(commentId, vote) {
  return function(dispatch) {
    axios.post(`${API_URL}/comments/${commentId}`, { option: vote }, { headers: headers })
      .then((response) => {
        dispatch({type: VOTE_ON_COMMENT, payload: response.data})
      })
  }
}
