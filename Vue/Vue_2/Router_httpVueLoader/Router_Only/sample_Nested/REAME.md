Não deixar /:name o Vue pode entender como uma rota princippal

```js
 children: [
            { path: "/:name", name: "p1", component: pessoa },
            { path: "/:name", name: "p2", component: pessoa2 },
```

E para criar as slugs devemos usar os params na router-link

Neste caso pessoa1 não será subrota enquando pessoa2 será uma sub da rota principal

```js
 children: [
            { path: ":pessoa1", name: "p1", component: pessoa },
            { path: "/pessoa2", name: "p2", component: pessoa2 },
```

Fazendo slugs com array de objects no component filho, basicamente o slug aqui deve ser o mesmo value do name

```js
//no array
  rotas: [
              { id: 1, name: "Pesoa one", slug: "pessoa-one" },
              { id: 2, name: "Pesoa two", slug: "pessoa-two" },
            ],


//nas rotas
 children: [
            { path: "pessoa-one-um", name: "pessoa-one", component: pessoa },
            { path: "pessoa-two-dois", name: "pessoa-two", component: pessoa2 },
          ],
        },

//na chamada,esse v-for na li é para cada item ser seu li para melhor organização
  <ol>
          <li v-for="(item) in rotas" :key="item.id">
            <router-link :to="{name: item.slug}">{{item.name}}</router-link>
          </li>
</ol>
```

Se tiver problemas quando estiver dentro de uma Nested router e precisar voltar para uma rota principal, sugiro verificar se está usando name nas rotas principais.
