From Scratch get JSON data to select menu:

1 - em methods fazer uma async function onde no retorno `cards` é o array principal que devemos jogar para a string `cartoes` que está como `null` onde receberá dados que será usado pelo loop v-for

```js
methods: {
          async bancos() {
            const req = await fetch("http://localhost:3000/cartoes");
            const data = await req.json();
            this.cartoes = data.cards;
            console.log(data);
          },
        },
```

2 - Para testar a fun usar o created()

```js
  created() {
          this.bancos();
        },
```

3 - no HTML

```js
<select>
        <option value="">Selecionar</option>
        <option v-for="(item) in cartoes" key="item.id">{{item.tipo}}</option>
</select>
```

4 - Para pegar o `selected` fazer um v-model, contudo como o value não foi definido o default return será o nome do próprio select, no nosso Array temos 3 options: id, tipo e limite.

```html
<option v-for="(item) in cartoes" key="item.id" :value="item.limite">
  {{item.tipo}}
</option>
```
