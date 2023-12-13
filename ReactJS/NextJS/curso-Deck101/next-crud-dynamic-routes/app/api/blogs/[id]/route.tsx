import { deletePost, getById, updatePost } from '@/lib/data'
import { NextRequest, NextResponse } from 'next/server'
import { title } from 'process'

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