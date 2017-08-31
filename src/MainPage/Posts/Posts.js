import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../MainPage.css'

//const uuid = require('uuid/v1')



class Posts extends Component {

  render() {

    const posts = [
    {
        id: "8xf0y6ziyjabvozdd253nd",
        timestamp: 1467166872634,
        title: "Udacity is the best place to learn React",
        body: "Everyone says so after all.",
        author: "thingtwo",
        category: "react",
        voteScore: 6,
        deleted: false
    },
    {
        id: "6ni6ok3ym7mf1p33lnez",
        timestamp: 1468479767190,
        title: "Learn Redux in 10 minutes!",
        body: "Just kidding. It takes more than 10 minutes to learn technology.",
        author: "thingone",
        category: "redux",
        voteScore: -5,
        deleted: false
    },
    {
        id: "6ni6ok3ym7mf1p33lned",
        timestamp: 1468479767198,
        title: "React Native is next in the React Nanodegree",
        body: "Congrats for going through the React and Redux parts. You are now ready to advance to the final topic: React Native.",
        author: "thingthree",
        category: "udacity",
        voteScore: +10,
        deleted: false
    }
]


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
          {posts && posts.map((post) => (
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




export default Posts;
