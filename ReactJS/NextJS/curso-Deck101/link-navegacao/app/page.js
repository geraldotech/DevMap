import Link from 'next/link'

export default function Home() {
  const canal = 'gmapdev'

  return (
    <>
      <h1>Home Page</h1>
      {/* parametros de url */}
      {/*  <Link href={`/dashboard?name=${canal}`}>Dashboard</Link> */}
      {/*  <Link
        href={{
          pathname: '/dashboard',
          query: { canal: 'Developer' },
        }}>
        Dashboard
      </Link> */}
      {/*   <Link href="/dashboard" prefetch={false}>
        Dashboard
      </Link> */}
    </>
  )
}
