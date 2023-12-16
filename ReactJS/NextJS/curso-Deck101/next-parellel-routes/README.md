# Rotas paralelas

## Juntar duas rotas aninhas separadas em um lugar

- Ir no layout da rota raiz e: `const layoutShopping = ({ children, products, reviews }) => {` depois chamar todos os parametro como acontece com children
- fechar o servidor para evitar travar o VS Studio

- Agora é necessário renomar a pasta de cada subrota adicionando um `@` products > `@products` e review > `@reviews` com isso permite usá-los como slots
- Agora `/app/shop/layout.js` vai carregar as subrotas em uma só pagina:

```js
const layoutShopping = ({ children, products, reviews }) => {
  return (
    <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
      {children}
      {products}
      {reviews}
    </div>
  )
}
```

porem a rota `http://localhost:3000/shop/products/recommended` não abre mais a create `default.js` in:

- /app/shop/default.js
- /app/shop/@reviews/default.js - rota que nao queremos carregar

```js
export default function ReviewDefault() {
  return null
}
```

- Stop server and delete .next directory `rm -rf .next`
- Now start server and try access: `http://localhost:3000/shop/recommended`
- Create a new route /app/shop/`@products`/about/page.js now can access with `http://localhost:3000/shop/about` because `@products` foi passado como props no `\app\shop\layout.js`
- porque eu tive que fazer o `default.js` in @reviews sendo que a rota esta dentro de @products ??? pq devemos `fazer o comportamento padrao de quem não quer carregar`

### DICA atratar o carregamento das páginas para visualizar o skeleton:

na page.js da rota acima da function que retorna o conteudo, criar uma function com return de promisse e setTimeout

```js
async function getReviews() {
  return new Promise((resolve) => setTimeout(resolve, 5000))
}

// adicione o async
export async function Reviews() {
  //chamar a promise
  await getReviews()
  return <>my content</>
}
```

DICA: No layout, parametros `{children}` também pode ser chamado por `props.children` ou ser descontruido passando apenas **children**

```js
const layoutShopping = (props) => {
  return (
    <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
      {props.children}
    </div>
  )
}

export default layoutShopping
```
