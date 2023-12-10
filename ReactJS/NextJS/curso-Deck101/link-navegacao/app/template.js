'use client'
import Navigation from '@/app/components/Navigation'

export default function Template({ children }) {
  /* define links obj */
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Blog', href: '/blog' },
  ]

  return (
    <>
      <div className="bg-blue-500">
        <p>template here</p>
        <Navigation navLinks={navLinks} />
        {children}
      </div>
    </>
  )
}
