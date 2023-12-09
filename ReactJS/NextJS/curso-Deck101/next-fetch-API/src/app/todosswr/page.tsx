'use client'

import { url } from 'inspector'
import useSWR from 'swr'

type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

export default function Todos() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const URL = 'https://jsonplaceholder.typicode.com/todos'
  const { data, error, isLoading } = useSWR<Todo[]>(URL, fetcher)

  return (
    <>
      {!isLoading && (
        <ul>
          {data?.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </>
  )
}
