/* ************************************* GET Requests ************************************* */

/* ************************************* get all Posts ************************************* */
async function getPosts() {
  let response = await fetch("https://dummyjson.com/posts");
  let postsData = await response.json();
  return postsData.posts;
}

/* ************************************* get all users ************************************* */
async function getUsers() {
  let response = await fetch("https://dummyjson.com/users?limit=0")
  let usersData = await response.json()
  return usersData.users
}




/* ************************************* get Post by Id ************************************* */
async function getPost(postId) {
  let response = await fetch(`https://dummyjson.com/posts/${postId}`)
  let post = await response.json()
  return post
}


/* ************************************* get Comments by Id ************************************* */
async function getComments(id) {
  let response = await fetch(`https://dummyjson.com/posts/${id}/comments`);
  let commentsData = await response.json();
  return commentsData.comments
}

/* ************************************* get user by Id ************************************* */
async function getUser(userId) {
  let response = await fetch(`https://dummyjson.com/users/${userId}`);
  let user = await response.json();
  return user
}




/* ************************************* Write Requests (POST, PUT, DELETE) ************************************* */

/* ************************************* Add Post ************************************* */
async function addPost(post) {
  const response = await fetch("https://dummyjson.com/posts/add", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(post)
  });
  const result = await response.json();
  return result;
}

/* ************************************* Edit Post ************************************* */
async function updatePost(id, updatedData) {
  const response = await fetch(`https://dummyjson.com/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify(updatedData),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const updatedResult = await response.json();
  return updatedResult;
}

/* ************************************* Delete Post ************************************* */
async function deletePost(id) {
  const response = await fetch(`https://dummyjson.com/posts/${id}`, {
    method: 'DELETE'
  });
  const deletionResult = await response.json();
  console.log("Server Response:", deletionResult);
}
