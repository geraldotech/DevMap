export default function StateLift({ Propname }) {
  return (
    <div className="">
      <h1>Exe 9</h1>
      <form>
        <input
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => Propname(e.target.value)}
        />
        <input type="reset" value="reset" onClick={(e) => Propname()} />
      </form>
    </div>
  )
}
