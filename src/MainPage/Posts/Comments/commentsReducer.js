import _ from 'lodash';

import {
  FETCH_COMMENTS,
  FETCH_COMMENTS_FULFILLED,
  FETCH_COMMENTS_REJECTED,
  VOTE_ON_COMMENT
} from './commentsActions';



export default function commentsReducer(state={
  comments: {},
  fetching: false,
  fetched: false,
  error: null,
}, action) {
  switch (action.type) {
    case FETCH_COMMENTS: {
      return {
        ...state,
        fetching: true,
        fetched: false,
      };
    }
    case FETCH_COMMENTS_FULFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        comments: _.mapKeys(action.payload, 'id')
      };
    }
    case FETCH_COMMENTS_REJECTED: {
      return {
        ...state,
        fetching: false,
        error: action.payload
       };
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
    return state;
  }

}
