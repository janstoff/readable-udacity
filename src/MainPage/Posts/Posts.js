import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../MainPage.css';

import { fetchPosts } from './postsActions';
//const uuid = require('uuid/v1')



class Posts extends Component {

  componentWillMount() {
    this.props.dispatch(fetchPosts())
  }

  render() {

    console.log(this.props)

function timeConverter(timestamp){
var a = new Date(timestamp * 1000);
var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var year = a.getFullYear();
var month = months[a.getMonth()];
var date = a.getDate();
var hour = a.getHours();
var min = a.getMinutes();
var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min;
return time;
}

    return (
      <div className="posts-wrapper">
        <div className="posts-grid">
          {this.props.posts && this.props.posts.map((post) => (
            <div key={post.id} className="post">
              <div className="post-title">{post.title}</div>
              <div className="post-author">{post.author}</div>
              <div className="post-date-time"> posted: {timeConverter(post.timestamp)}</div>
              <div className="post-content">{post.body}</div>
              <div className="post-interaction">
                <button>upvote</button>
                <button>downvote</button>
                <button>add comment</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

function mapStateToProps({ posts }) {
  return {posts: posts.posts}
}



export default connect(mapStateToProps)(Posts);
