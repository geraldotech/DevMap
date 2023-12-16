'use client'
export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Algo aconteceu</h2>
      <button onClick={() => reset()}>Tentar novamente!</button>
    </div>
  )
}
