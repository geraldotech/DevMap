'use client'
import { usePosts } from '@/hook/posts'
import Link from 'next/link'
import styles from './page.module.css'

export default function PostsPage() {
  const post = usePosts()
  return (
    <div className={styles.posts}>
      <h1>All posts</h1>
      {post.posts?.map((val: any, ind: any) => (
        <nav key={ind}>
          {
            /* by ID   <Link href={'/posts/' + val.id}>
              {val.id} - {val.title}
            </Link> */
            <Link href={'/posts/blog/' + val.slug}>
              {val.id} - {val.title}
            </Link>
          }
        </nav>
      ))}
    </div>
  )
}
