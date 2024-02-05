1 - ir em https://scrollrevealjs.org/guide/hello-world.html e copiar o link de CDN a ser instalador no head
2 - aplicar uma classe extra para esconder os elementos que será aplicado o efeito.
eg:

```css
/* scroll reveal */
.intro-text,
.intro-img {
  visibility: hidden;
}
```

3 - Seria interessante fazer um script apenas para o scroll-reveal.

4 -

```js
// iniciar o script
window.revelar = ScrollReveal({ reset: true })

revelar.reveal('.card2', {
  duration: 2000,
  distance: '90px',
  delay: 1000,
})
```

- Verificar o projeto Smartupdate para preview e ir no site procurar outras possibilidades
