import Link from 'next/link'

export default function BlogLayout({ children }) {
  return (
    <>
      <h1>Menu adicional de Blog</h1>
      {children}
      <nav>
        <ul>
          <li>
            {' '}
            <Link href="/blog/postone">postone</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
