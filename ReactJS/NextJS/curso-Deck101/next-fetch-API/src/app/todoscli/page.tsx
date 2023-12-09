'use client'

import { useEffect, useState } from 'react'

type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

export default function Todos() {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    async function GetData() {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos')

      if (!res.ok) {
        throw new Error('Falha ao carregar todos')
      }
      const data: Todo[] = await res.json()
      setTodos(data)
    }

    GetData()
  }, [])

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  )
}
