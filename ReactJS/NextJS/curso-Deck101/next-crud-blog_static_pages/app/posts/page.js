/* export default function Page({ params }) {
  return (
    <div>
      <h1>Hello posts</h1>
    </div>
  )
}
 */
import Link from 'next/link'
async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Page() {
  const data = await getData()

  return (
    <main>
      <nav>
        {data.map((post) => {
          return (
            <Link
              key={post.id}
              href={'/posts/' + post.id}
              className="block text-red p-1 text-sky-400/100 hover:text-green-400">
              {post.id} - {post.title}
            </Link>
          )
        })}
      </nav>
    </main>
  )
}
