- create a `loading.js` tailwind CSS [https://flowbite.com/docs/components/skeleton/](https://flowbite.com/docs/components/skeleton/)
- Products [https://flowbite.com/docs/components/tables/](https://flowbite.com/docs/components/tables/)
- criar esqueleto de carregamento, baseado no React Suspense
- esqueleto que fica pulsando o carregamento
- melhorar a experiência do usuário
- React Suspense basicamente tem 2 proproedades
  children: o que está dentro do component de suspense
  fallback: esqueleto

Promessa de carregamento da página: await new Promise

```js
import Image from 'next/image'
import Produto from './components/Produto'
import Review from './components/Review'

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return (
    <>
      <Produto />
      <Review />
    </>
  )
}
```

### React Suspense

Foi deletado o `loading.js`

- [Video](https://www.youtube.com/watch?v=K2Eyf7YOx-o)
