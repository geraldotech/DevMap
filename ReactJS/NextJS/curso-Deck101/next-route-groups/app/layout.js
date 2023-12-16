import Link from 'next/link'

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {children}
        <nav className="bg-indigo-500">
          <ul>
            <li>
              <Link href="/">Ir para Home</Link>
            </li>
            <li>
              <Link href="/tratamentoErros">Ir para Tratamento de Erros</Link>
            </li>
            <li>
              <strong>/app/layout.js</strong>
            </li>
          </ul>
        </nav>
      </body>
    </html>
  )
}

export default layout
