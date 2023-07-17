import React, { useEffect, useState } from 'react';

function PostsAndComments() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setPosts(data);
      });

    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setComments(data);
      });
  }, []);

  return (
    <div>
      <h2>Posts:</h2>
      {posts.map(function (post) {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        );
      })}
      <h2>Comments:</h2>
      {comments.map(function (comment) {
        return (
          <div key={comment.id}>
            <h4>{comment.name}</h4>
            <p>{comment.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default PostsAndComments;
