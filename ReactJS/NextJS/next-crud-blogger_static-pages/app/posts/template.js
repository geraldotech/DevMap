export default async function Template({ children }) {
  return (
    <div>
      <p>
        xxxI am from <code> /posts/layout.tsx</code> read more about me in
        <code> /posts/layout.tsx </code>
        <a
          href="https://nextjs.org/docs/app/api-reference/file-conventions/template"
          target="_blank">
          https://nextjs.org/docs/app/api-reference/file-conventions/template
        </a>
      </p>

      {children}
    </div>
  )
}
