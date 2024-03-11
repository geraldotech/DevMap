import React from 'react'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Exe18() {
  const { data, error, isLoading } = useSWR('https://api.github.com/repos/vercel/swr', fetcher)
  console.log(data)

  if (error) return 'An error has occurred.'
  if (isLoading) return 'Loading...'

  return (
    <>
      <div className="container">
        <h2>Exe18</h2>
        <h1> {data.name}</h1>
        <p>{data.description}</p>
        <strong>👁 {data.subscribers_count}</strong> <strong>✨ {data.stargazers_count}</strong> <strong>🍴 {data.forks_count}</strong>
      </div>
    </>
  )
}
