/* ************************************* Getting Id from URL ************************************* */
const container = document.querySelector(".container")
const search = window.location.search
const params = new URLSearchParams(search)
const postId = params.get("id")


/* ************************************* Getting Data ************************************* */
async function getPostDetails() {
  /* Title & Loading ... */
  const mainTitle = document.getElementById("mainTitle")
  mainTitle.innerHTML = "Post " + `${postId}`
  container.innerHTML = `
      <div class="loading">
        <img src="./Assets/img/Loading.png" class="loading-time">
        <h1>Loading ....</h1>
        <h3>Plaese Wait to Get Post ${postId}</h3>
      </div>
  `

  const post = await getPost(postId)
  const comments = await getComments(postId)
  const user = await getUser(post.userId)

  showPost(post, user, comments)
}

/* ************************************* Showing Data ************************************* */
function showPost(post, user, comments) {

  const postTag = post.tags.map(tag =>
    `
      <span class="tag">#${tag}</span>
    `).join('');

  const postComments = comments.map(comment => `
        <div class="comment">
            <p class="special">${comment.user.username}:</p> ${comment.body}
        </div>
    `).join('');

  container.innerHTML = `
      <div class="btn border-style h-50 flex-center">
      <a href="./index.html" class="h-50">
        <img src="./Assets/img/main.png">
        </a>
      </div>
      <div class="card border-style w-60" style="scale:1">
        <div>
          <div class="post-title">${post.title}</div>
          <div class="sub-text">
            <p class="mb-15">${post.body}</p>
            <a id="edit" class="btn border-style" href="edit-post.html?id=${post.id}">
                <img src="./Assets/img/edit.png">Edit
            </a>
            <a id="delete" class="btn border-style">
                <img src="./Assets/img/delete.png">Delete
            </a>
          </div>
        </div>
        <div class="details">
          <div class="likes"><img src="./Assets/img/like.png"> ${post.reactions.likes}</div>
          <div class="user-name"><img src="./Assets/img/user.png"> ${user.firstName} ${user.lastName}</div>
        </div>


        <div class="tags">
          <p>Tags (${post.tags.length}):</p>
          ${post.tags.length > 0 ? postTag : '<p>There are no Tags</p>'}
        </div>


        <div class="comments">
          <p>Comments (${comments.length}):</p>
          ${comments.length > 0 ? postComments : '<p>There are no comments</p>'}
        </div>
      </div>
    `;


  /* ************************************* Delete Post ************************************* */
  const deleteBtn = document.getElementById('delete');
  deleteBtn.addEventListener('click', async () => {
    await deletePost(post.id);
    console.log(`The item with ID ${post.id} has been deleted.`);
    alert(`The item with ID [${post.id}] has been deleted.`);
    window.location.href = "index.html";

  });
}
getPostDetails();
