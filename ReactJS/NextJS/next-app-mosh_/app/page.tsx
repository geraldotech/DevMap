import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main>
      <section className="flex text-red-500 hover:text-red-950">
        <button className="text-gray">Home button</button>
        <h1>Hello World</h1>
        <Link href="/users">Users</Link>
      </section>
      <ProductCard />
    </main>
  )
}
