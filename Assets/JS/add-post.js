const createPost = document.getElementById("createPost");
const create = document.getElementById("create");
const postTitle = document.getElementById("postTitle")
const postContent = document.getElementById("postContent")
const userId = document.getElementById("userId")


createPost.addEventListener("submit", async (event) => {
  event.preventDefault()

  const newPost = {
    title: postTitle.value,
    body: postContent.value,
    userId: +userId.value
  }
  create.value = "Saving..."
  const result = await addPost(newPost)

  console.log("Post Added Succesfuly :", result)

  alert("Post added successfully.")
  window.location.href = "index.html"
})
