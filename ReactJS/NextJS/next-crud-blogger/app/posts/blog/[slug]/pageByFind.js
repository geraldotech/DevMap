// https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes

/* export default function Page({ params }) {
  return <div>My Post: {params.slug}</div>
}
 */
export default async function Page({ params }) {
  const post = await fetch('http://localhost:3000/api/blogs')
    .then((res) => res.json())
    .then((re) => re.posts)
  console.log(params.slug)
  const single = post.find((post) => post.slug === params.slug)
  /*  return post.map((post) => {
    params.slug
  }) */
  return (
    <div>
      <p>ID:{single.id}</p>
      <p>Title:{single.title}</p>
      <p>Description: {single.desc}</p>
    </div>
  )
}
