// typificação

type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

// dica bonus
// remover o obj de cache no fetch caso houver
export const revalidate = 3600 // revalida a pagina a cada hora - opt 2 ✅

// cache: 'force-cache' // padrão
// cache: 'no-cache'
// https://youtu.be/M2PfbCciR5E?t=2034

async function getData(): Promise<Todo[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
    // cache: 'no-cache'
    /*    next: {
      revalidate: 60, // tempo de vida do cache - opt 1 ✅
    }, */
  })

  if (!res.ok) {
    throw new Error('Falha ao carregar todos')
  }
  const data = await res.json()
  return data
}

export default async function Todos() {
  const todos = await getData()

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
