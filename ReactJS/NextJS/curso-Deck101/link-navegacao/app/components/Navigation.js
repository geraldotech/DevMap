'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const Navigation = ({ navLinks }) => {
  const pathname = usePathname()

  const router = useRouter()
  console.log(router)

  return (
    <nav className="bg-slate-500">
      <ul>
        {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href)
          //const isActive = pathname === link.href
          //console.log('path', link.href.split('')[1])
          return (
            <li
              key={link.name}
              className={isActive ? 'bg-red-600' : 'bg-slate-500'}>
              {/* v1    <Link href={link.href}>
                {link.name} - {isActive ? 'Active' : ''}
              </Link> */}

              {/* v2 using hook useRouter() */}
              <button type="button" onClick={() => router.push(link.href)}>
                {link.name}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navigation
