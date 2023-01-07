[https://vuejs.org/guide/components/slots.html](https://vuejs.org/guide/components/slots.html)

# slots turn more flexible and reusable

informação só vai aparecer caso o component carregando tenha esse suporte.
Fazendo o uso de reutilização de components para adicionar informações extra devemos usar slots.

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
