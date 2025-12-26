/* ************************************* Getting Id from URL ************************************* */
const container = document.querySelector(".container")
const search = window.location.search
const params = new URLSearchParams(search)
const postId = params.get("id")



/* ************************************* Getting Elements ************************************* */
const editForm = document.getElementById("createPost")
const titleInput = document.getElementById("postTitle")
const contentInput = document.getElementById("postContent")
const userIdInput = document.getElementById("userId")


/* ************************************* Loading Data to add to Fields ************************************* */
async function fillPostData(postId) {
  const post = await getPost(postId)
  const originalTitle = post.title
  const originalBody = post.body


  titleInput.value = originalTitle
  contentInput.value = originalBody
}

/* ************************************* Edit Form   ************************************* */
editForm.addEventListener("submit", async (event) => {
  event.preventDefault()

  const newTitle = titleInput.value
  const newBody = contentInput.value

  const updatedPost = {
    title: newTitle,
    body: newBody,
  };

  const updatedResult = await updatePost(postId, updatedPost)

  console.log("Response:", updatedResult)
  alert("Post Updated Succesfuly")
  window.location.href = `post.html?id=${postId}`
})

fillPostData(postId)
