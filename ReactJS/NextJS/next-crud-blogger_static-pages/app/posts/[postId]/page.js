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
      My Post params.postID: {params.postId} - {single.title}
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
