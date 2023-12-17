import { NextResponse } from 'next/server'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const limite = searchParams.get('limite')
  // http://localhost:3000/posts?limite=3
  // https://jsonplaceholder.typicode.com/posts?_limit=3
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limite}`
  )
  if (!res.ok) throw new Error('Problemas no fetch')

  const data = await res.json()

  return NextResponse.json({ data })
}

// exemplo nao finalizado de POST

export async function POST(request) {
  const { searchParams } = new URL(request.url)
  const limite = searchParams.get('limite')
  // http://localhost:3000/posts?limite=3
  // https://jsonplaceholder.typicode.com/posts?_limit=3
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      title: 'Meu titulo',
    }),
  })
  if (!res.ok) throw new Error('Problemas no fetch')

  const data = await res.json()

  return NextResponse.json({ data })
}
