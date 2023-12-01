type Post = {
  id: string
  title: string
  desc: string
  //date: Date
}

let posts: Post[] = [
  { id: '1', title: 'Lorem Ipsum', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s' },
  { id: '2', title: 'NASA ', desc: 'brings you the latest news, images and videos from America\'s space agency pioneering the future in space exploration, scientific discovery and' },
]
//let posts: Post[] = []

// handlers

export const getPosts = () => posts

export const addPost = (post: Post) => {
  posts.push(post)
}
export const deletePost = (id: string) => {
  posts = posts.filter((post) => post.id !== id)
}
export const updatePost = (id: string, title: string, desc: string) => {
  const post = posts.find((post) => post.id === id)

  if (post) {
    post.title = title
    post.desc = desc
  } else {
    throw new Error('NO POST FOUND')
  }
}

export const getById = (id: string) => {
  return posts.find((post) => post.id === id)
}
