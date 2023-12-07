export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}

      <p>
        Layout from <code>/posts/layout.tsx</code>
      </p>

      <hr></hr>
      {children}
    </section>
  )
}
