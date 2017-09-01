import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

import '../MainPage.css';
import { timeConverter } from '../../utils/helpers';
import { fetchPosts } from './postsActions';
import PostDetail from './Route-PostDetail/PostDetail';



class Posts extends Component {

  componentWillMount() {
    this.props.dispatch(fetchPosts())
  }

  render() {

    console.log(this.props)

    return (
      <div className="posts-wrapper">
        <div className="posts-grid">
          {this.props.posts && _.map(this.props.posts, (post) => {
             return (
               <div key={post.id} className="post">
                <Link to={`/post/${post.id}`} className="post-title" component={PostDetail}>{post.title}</Link>
              </div>
             )
          })}
          <button>add post</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ posts }) {
  return {posts: posts.posts}
}



export default connect(mapStateToProps)(Posts);
