import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

import '../MainPage.css';
import { timeConverter } from '../../utils/helpers';
import { fetchPosts, fetchPostsByCategory, selectSortValue } from './postsActions';



class Posts extends Component {

  componentWillMount() {
    const { category } = this.props.match.params;

    if(category) {
      this.props.dispatch(fetchPostsByCategory(category))
    } else {
      this.props.dispatch(fetchPosts())
    }
  }


  render() {


    let sortedPosts
      if(this.props.sortValue === 'latest') {
        sortedPosts = _.orderBy(this.props.posts, ['timestamp'], ['desc'])
      }
      if (this.props.sortValue === 'popularity') {
        sortedPosts = _.orderBy(this.props.posts, ['voteScore'], ['desc'])
      }



    let visiblePosts
      if (this.props.selectedCategory !== ' ') {
        visiblePosts = _.filter(sortedPosts, { category:  this.props.selectedCategory });
      }
      else {
        visiblePosts = sortedPosts;
      }


    return (
      <div className="posts-wrapper">
        <div className="posts-filter">Sort by...
          <button className="btn btn-default" value="latest" onClick={(event) => this.props.dispatch(selectSortValue(event.target.value))}>latest</button>
          <button className="btn btn-default" value="popularity" onClick={(event) => this.props.dispatch(selectSortValue(event.target.value))}>popularity</button>
        </div>
        <div className="posts-grid">
          {visiblePosts && _.map(visiblePosts, (post) => {
             return (
               <div key={post.id} className="post">
                <Link to={`/${post.category}/${post.id}`} className="post-title">{post.title}</Link>
                  <div>{timeConverter(post.timestamp)}</div>
                  <div>{post.voteScore}</div>
              </div>
             )
          })}
          <Link to="/posts/new">
            <button>add post</button>
          </Link>
        </div>
      </div>
    )
  }
}



function mapStateToProps({ posts, categories }) {
  return {
    posts: _.filter(posts.posts, { deleted: false }),
    selectedCategory: categories.selectedCategory,
    sortValue: posts.sortValue,
  }
}



export default withRouter(connect(mapStateToProps)(Posts));
