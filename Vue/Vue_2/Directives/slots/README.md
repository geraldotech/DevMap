[https://vuejs.org/guide/components/slots.html](https://vuejs.org/guide/components/slots.html)

# slots turn more flexible and reusable

Em `<Aa> </A>` a informação só vai aparecer caso o component carregado tenha slots, fazendo a reutilização adicionando informações extra.

Também podemos passar outros components

```js
<div>
  <p>App.vue</p>
  <Aa />
  <Aa>
    <p>Master</p>
    <Download />
  </Aa>
</div>
```
