![Screenshot 2024-02-17 075415](https://github.com/geraldotech/DevMap/assets/92253544/1512e3eb-cd08-465b-a324-501efd8c7b81)

![Screenshot 2024-02-17 080546](https://github.com/geraldotech/DevMap/assets/92253544/6cba8cd4-537a-4b49-9207-932da4a408ec)

# Code Splippting, lazy, Suspsense

> Please Setting up locally this project

- Users `dynamic import function import()`
- Combinte import() with React.lazy() to only load a 'heavy' component if needed

![image](https://github.com/geraldotech/DevMap/assets/92253544/0b488487-7a80-44dd-a2e9-ddc889d4cc3a)

- Abra o console > network > Fast 3G> only JS e verifique que `@faker lib` leva 22s para carregar
  instead import it, create a component...

```js
// Create a suspense component
const ProductsList = React.lazy(() => {
  // this component needs be export default
  return import('./ProductsList')
})

// so isso nao basta precisa do  <React.Suspense> wrapper the section do ProducstList checkout below
```

works `@faker lib` nao é mais carregado de forma desnecessária, the `<React.Suspense>` component will a `fallback`

- prop to give React something to render in the meantime
- while it's downloading all the code for the suspended
- component.

```js
<React.Suspense fallback={<h2>Loading...</h2>}>
  <div className="products-list">{showProducts && <ProductsList />}</div>
</React.Suspense>
```

Agora nao quebra o site não vai ficar em branco carregando um script que talvez nem seja usado

# useMemo()

Hook to remember calculated values between renders
