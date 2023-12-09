interface Post {
  userId: string
  id: string
  title: string
  body: string
}

interface Comment {
  postId: string
  id: string
  name: string
  email: string
  body: string
}

async function getPost(postId: string): Promise<Post> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  )

  if (!res.ok) {
    throw new Error('Falha ao carregar todos')
  }
  const data = await res.json()
  return data
}

// comments

async function GetComments(postId: string): Promise<Comment[]> {
  // https://jsonplaceholder.typicode.com/comments?postId=2
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  )

  if (!res.ok) {
    throw new Error('Falha ao carregar todos')
  }
  const data = await res.json()
  return data
}

export default async function Post({
  params: { postId },
}: {
  params: { postId: string }
}) {
  // chama a funcao acima passando o postId
  // const post = await getPost(postId)
  // const comments =  await GetComments(postId)

  const [post, comments] = await Promise.all([
    getPost(postId),
    GetComments(postId),
  ])

  return (
    <>
      Post: {post?.title}
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}> --- {comment.body}</li>
        ))}
      </ul>
    </>
  )
}
