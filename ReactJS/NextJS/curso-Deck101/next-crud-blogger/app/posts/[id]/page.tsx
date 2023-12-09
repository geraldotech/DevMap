export default async function Page({
  params,
}: {
  params: { slug: string; id: string; title: string }
}) {
  const post = await fetch('http://localhost:3000/api/blogs/' + params.id)
    .then((res) => res.json())
    .then((re) => re.post)

  return (
    <div>
      <ul>
        <li>{post.id}</li>
        <li>{post.title}</li>
        <li>{post.desc}</li>
      </ul>
    </div>
  )
}
