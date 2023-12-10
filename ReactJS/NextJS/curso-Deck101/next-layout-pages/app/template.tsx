export default function Template({ children }: any) {
  const number = Math.floor(Math.random() * 10)

  return (
    <div>
      <h2 className="bg-gray-500 p-4">Template homepage {number}</h2>
      {children}
    </div>
  )
}
