const container = document.getElementById("posts-container")


/* Read all Posts */
async function readPosts() {

  // Loading Screen
  container.innerHTML = `
    <div class="loading">
    <img src="./Assets/img/Loading.png" class="loading-time">
      <h1>Loading ....</h1>
      <h3 >Plaese Wait to Get Posts</h3>
    </div>
  `;


  let users = await getUsers()
  let posts = await getPosts()
  posts = posts.map(post => {
    let userName = ""
    for (let i = 0; i < users.length; i++) {
      if (post.userId == users[i].id) {
        userName = users[i].firstName + " " + users[i].lastName
        break
      }
    }
    return { ...post, ["userName"]: userName }
  })


  container.innerHTML = "";
  posts.forEach(post => {
    container.innerHTML += `
            <div class="card border-style">
              <div class="content">
                <div class="post-title">${post.title}</div>
                <div class="sub-text col">
                  <p>${post.body.substring(0, 150)}...</p>
                  <a class="show-more" href="post.html?id=${post.id}">Show More</a>
                </div>
              </div>
              <div class="details">
                <div class="likes"><img src="./Assets/img/like.png" alt="">${post.reactions.likes}</div>
                <div class="user-name"><img src="./Assets/img/user.png" alt=""> ${post.userName}</div>
              </div>
            </div>
        `
  })
}
readPosts();
