import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
  const postId = params.postId
  console.log(postId)

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  )

  if (!res.ok) throw new Error('Erro de Fetch')

  const data = await res.json()

  // return NextResponse.json({ param: postId })
  return NextResponse.json({ param: data })
}
