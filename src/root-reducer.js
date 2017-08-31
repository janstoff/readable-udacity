import { combineReducers } from 'redux'

import categoriesReducer from './MainPage/CategoryMenu/categoriesReducer.js'
//import comments from './MainPage/Posts/Comments/commentsReducer.js'
import postsReducer from './MainPage/Posts/postsReducer.js'

export default combineReducers({
  categories: categoriesReducer, //  categories state coming from categoriesReducer
  //comments,
  posts: postsReducer
});
