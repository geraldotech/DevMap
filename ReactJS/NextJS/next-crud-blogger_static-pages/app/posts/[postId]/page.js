export async function generateStaticParams() {
  const request = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await request.json()
  return posts.map((post) => ({
    /* postId: tem que ser o mesmo nome da pasta [postId] */
    postId: String(post.id),
  }))
}

export default async function Page({ params }) {
  const id = params
  const request = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id.postId}`
  )
  const single = await request.json()
  console.log('single', single)

  return (
    <div>
      <h2 className="text-4xl	">{single.title}</h2>
      Post params postID: <code>{params.postId}</code>
      <p>{single.body}</p>
    </div>
  )
}

/* generateMetadata for this posts */
export async function generateMetadata({ params }) {
  return {
    title: `Post: ${params.slug}`,
    description: `Pagina do Post: ${params.slug}`,
  }
}
