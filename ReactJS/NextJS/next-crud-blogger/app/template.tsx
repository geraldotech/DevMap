export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p>
        I am from <code>/app/template.tsx</code>
      </p>
      {children}
    </div>
  )
}
