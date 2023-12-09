import { useEffect, useState } from 'react'

export function usePosts() {
  const [posts, setPosts] = useState<any[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/api/blogs', { cache: 'no-store' }).then((req) =>
      req.json().then((res) => {
        setPosts(res)
      })
    )
  }, [])

  return posts
}
