export default function Exe7() {
  function contar(x, n) {
    let content = []
    for (let i = x; i <= n; i++) {
      content.push(i)
    }
    return content
  }

  return (
    <div className="container large">
      <h2>Exe7</h2>

      <ol>
        {contar(1, 10).map((val) => (
          <li key={val}>{val}</li>
        ))}
      </ol>
    </div>
  )
}
