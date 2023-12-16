import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1 className="bg-red-500 text-black p-5">Home Page</h1>
      <section className="text-center mt-5">
        <Link
          href="/shop"
          className="text-2xl bg-blue-700 p-8 block hover:bg-green-600">
          Shop page
        </Link>
      </section>
    </>
  )
}
