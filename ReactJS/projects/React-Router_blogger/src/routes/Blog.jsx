import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/card'
import posts from '../api/db.json'
import styles from './blog.module.css'

const Blog = () => {
  const post = posts
  return (
    <div>
      <h1>Blog Posts</h1>
      {post.map((val, index) => (
        <div key={index} className={styles.links}>
          <Link to={`/blog/${val.slug}`}>{val.slug}</Link>
        </div>
      ))}
      <h1>Example with card props</h1>
      {post.map((val, index) => (
        <div key={index} className={styles.links}>
          <Card to={`/blog/${val.slug}`} slug={val.slug} />
        </div>
      ))}
    </div>
  )
}

export default Blog
