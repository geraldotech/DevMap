import { deletePost, getById, updatePost } from '@/lib/data'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: Request) => {
  const fullurl = req.url

  try {
    const id = req.url.split('blogs/')[1]
    const post = getById(id)
    if (!post) {
      return NextResponse.json({ message: 'ERROR POST 404' }, { status: 404 })
    }
    return NextResponse.json({ message: 'OK', post }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'ERROR', error }, { status: 500 })
  }

  /* return NextResponse.json(fullurl) */
}
export const PUT = async (req: Request) => {
  try {
    const { title, desc } = await req.json()
    const id = req.url.split('blogs/')[1]
    updatePost(id, title, desc)
    return NextResponse.json({ message: 'OK' }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ message: 'ERRORx', err }, { status: 500 })
  }
}
export const DELETE = async (req: Request) => {
  try {
    const id = req.url.split('blogs/')[1]
    deletePost(id)
    return NextResponse.json({ message: 'OK' }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ message: 'ERRORx', err }, { status: 500 })
  }
}
