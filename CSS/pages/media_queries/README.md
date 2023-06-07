# Anatomy of a Media Query

### `@media screen (min-width:320px) and (max-width: 768px)`

### `At-rule + Mediatype + MediaFeature + Operator + MediaFeature`

## Mais usado:

```cs
@media (`MediaFeature`){...}
@media screen and (`MediaFeature`){...}
@media print {}

```

# Value ranges

```css
/*
min: 600px div coral
*/
@media screen and (min-width: 600px) {
  div {
    color: coral;
  }
}
/*
porém ao ficar entre 700 e 800 a nova regra é color: purple  
      */
@media (min-width: 700px) and (max-width: 800px) {
  div {
    color: chartreuse;
  }
}

/*
porém ao atingir >= 800px volta a primeira regra
      */
```

### Great manual about all Media Queries

[https://css-tricks.com/a-complete-guide-to-css-media-queries/](https://css-tricks.com/a-complete-guide-to-css-media-queries/)

### Typical Device Breakpoints

[https://www.w3schools.com/howto/howto_css_media_query_breakpoints.asp](https://www.w3schools.com/howto/howto_css_media_query_breakpoints.asp)

### Media print()

[https://medium.com/@larymagal/segredos-do-media-print-dcd69cef1f56](https://medium.com/@larymagal/segredos-do-media-print-dcd69cef1f56)

```css
@media print {
  * {
    color-scheme: dark;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  div {
    background-color: rgb(155, 3, 3);
    padding-top: 30px;
  }
}
```

Exemplo de Alta prioridade

```css
* {
  box-sizing: border-box;
}
/* se é mobile first entao nao requer a regra max-width, porem caso essa regra exitir é alta prioridade */
h1 {
  color: yellow;
}

/* desktop */
@media screen and (min-width: 650px) {
  h1 {
    color: violet;
  }
}
/* mobile force */
@media screen and (max-width: 650px) {
  h1 {
    color: tomato;
  }
}
```

# e.g:

- [smart_vs_notebook.html](https://geraldotech.github.io/DevMap/CSS/pages/media_queries/smart_vs_notebook.html)
- [window-matchMedia.html](https://geraldotech.github.io/DevMap/CSS/pages/media_queries/window-matchMedia.html)
- [eg](https://geraldotech.github.io/DevMap/CSS/pages/media_queries/eg/index.html)
