export default function commentsReducer(state={
  comments: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) {

  switch (action.type) {
    case "FETCH_comments": {
      return {
        ...state,
        fetching: true
      };
    }
    case "FETCH_comments_REJECTED": {
      return {
        ...state,
        fetching: false,
        error: action.payload
       };
    }
    case "FETCH_comments_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        comments: [...state.comments, action.payload]
      };
    }
  }

}
