import { combineReducers } from 'redux';
//import { reducer as formReducer } from 'redux-form';

import categoriesReducer from './MainPage/CategoryMenu/categoriesReducer.js';
//import comments from './MainPage/Posts/Comments/commentsReducer.js'
import postsReducer from './MainPage/Posts/postsReducer.js';

export default combineReducers({
  categories: categoriesReducer, //  i.e. categories state coming from categoriesReducer
  posts: postsReducer,
  //comments: commentsReducer,
  //form: formReducer,
});
