// Reference: https://jsonplaceholder.typicode.com/guide/

// Get one post
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => response.json())
//   .then((json) => console.log(json.userId));

// Get all posts
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((response) => response.json())
// .then((json) => console.log(json));

// Create a post
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));