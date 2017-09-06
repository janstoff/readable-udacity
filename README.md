# App

## Installation

This project requires Node and NPM. If you do not have it, please download it (https://nodejs.org/en/download/). To install My Reads clone the repository:

`$ git clone https://github.com/janstoff/readable-udacity`

`$ cd readable-udacity`

`$ npm install`


## View

Launch App locally:

`$ npm start`

You can then view the website at http://localhost:3000


# Readable API Server
The project is supported by a simple API Server which is a available
with the following instructions:

## Installation

Clone Repo:  `git clone https://github.com/udacity/reactnd-project-readable-starter.git`
Install packages: `npm install`
Launch server: `node server`
Unless modified in `config.js` server will use port 5001


## API
Use an Authorization header to work with your own data:

`fetch(url, { headers: { 'Authorization': 'whatever-you-want' }})`

The following endpoints are available:  

`GET /categories`  
  **USAGE:**   
    Get all of the categories available for the app. List is found in categories.js.
    Feel free to extend this list as you desire.    

`GET /:category/posts`  
  **USAGE:**    
    Get all of the posts for a particular category   

`GET /posts`  
  **USAGE:**    
    Get all of the posts. Useful for the main page when no category is selected.  

`POST /posts`  
  **USAGE:**  
    Add a new post  

  **PARAMS:**   
    id - UUID should be fine, but any unique id will work  
    timestamp - timestamp in whatever format you like, you can use Date.now() if you like  
    title - String  
    body - String  
    owner - String  
    category: Any of the categories listed in categories.js. Feel free to extend this list as you desire.  

`GET /posts/:id`  
  **USAGE:**  
    Get the details of a single post  

`POST /posts/:id`  
  **USAGE:**  
    Used for voting on a post  

  **PARAMS:**  
    option - String: Either "upVote" or "downVote"  

`PUT /posts/:id`  
  **USAGE:**  
    Edit the details of an existing post  

  **PARAMS:**  
    title - String  
    body - String  

`DELETE /posts/:id`  
  **USAGE:**  
    Sets the deleted flag for a post to 'true'.   
    Sets the parentDeleted flag for all child comments to 'true'.  

`GET /posts/:id/comments`  
  **USAGE:**  
    Get all the comments for a single post  

`POST /comments`  
  **USAGE:**  
    Add a comment to a post  

  **PARAMS:**  
    id: Any unique ID. As with posts, UUID is probably the best here.  
    timestamp: timestamp. Get this however you want.  
    body: String  
    owner: String  
    parentId: Should match a post id in the database.  

`GET /comments/:id`  
  **USAGE:**  
    Get the details for a single comment  

`POST /comments/:id`  
  **USAGE:**  
    Used for voting on a comment.  

`PUT /comments/:id`  
  **USAGE:**  
    Edit the details of an existing comment  

  **PARAMS:**  
    timestamp: timestamp. Get this however you want.  
    body: String  

`DELETE /comments/:id`  
  **USAGE:**  
    Sets a comment's deleted flag to 'true'  
