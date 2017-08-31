/*


export default function postsReducer(state={
  categories: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) {

  switch (action.type) {
    case "FETCH_POSTS": {
      return {
        ...state,
        fetching: true
      };
    }
    case "FETCH_POSTS_REJECTED": {
      return {
        ...state,
        fetching: false,
        error: action.payload
       };
    }
    case "FETCH_POSTS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        posts: [...state.posts, action.payload]
      };
    }
  }

}
