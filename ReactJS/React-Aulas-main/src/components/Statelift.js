function StateLift({ setNome }) {
  return (
    <div>
      <p>Digite o seu nome:</p>
      <input
        type="text"
        placeholder="whats is your name"
        onChange={(e) => setNome(e.target.value)}
      />
    </div>
  )
}

export default StateLift
