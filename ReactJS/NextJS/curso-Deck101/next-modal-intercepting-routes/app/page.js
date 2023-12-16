import Image from 'next/image'
import Link from 'next/link'

async function getProdutos() {
  const request = await fetch('https://jsonplaceholder.typicode.com/photos')
  const data = await request.json()
  return data
}

export default async function Home() {
  const produtos = await getProdutos()

  return (
    <main className="container mx-auto">
      <h1 className="text-center text-4xl font-bold m-10">
        E-commerce Colorido
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto gap-6 m-10">
        {produtos.map(({ id, title, url, thumbnailUrl }) => (
          <Link href={`/produtos/${id}`} key={id}>
            <Image
              alt={title}
              src={thumbnailUrl}
              height={150}
              width={150}
              className="w-full object-cover aspect-square rounded-md"
            />
          </Link>
        ))}
      </div>
    </main>
  )
}
