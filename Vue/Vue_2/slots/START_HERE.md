[https://vuejs.org/guide/components/slots.html](https://vuejs.org/guide/components/slots.html)

# slots turn more flexible and reusable

Quando fazermos a reutilização de components e quiser adicionar alguma informação extra? devemos adicionar um slot no component
Essa informação só vai aparecer caso o component carregando tenha esse suporte.

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
