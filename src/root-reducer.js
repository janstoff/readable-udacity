import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// bringing in and renaming the reducer formReducer to avoid potential conflicts with other reducers

import categoriesReducer from './MainPage/CategoryMenu/categoriesReducer.js';
import commentsReducer from './MainPage/Posts/Comments/commentsReducer.js'
import postsReducer from './MainPage/Posts/postsReducer.js';

export default combineReducers({
  categories: categoriesReducer, //  i.e. categories state coming from categoriesReducer
  posts: postsReducer,
  comments: commentsReducer,
  form: formReducer,
});
