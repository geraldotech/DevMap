# pseudo-classes

https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes

### :hover

- [hover.html](./hover.html) - [Demo](https://geraldotech.github.io/DevMap/CSS/pages/hover.html)
- [hover2.html](./hover2.html) - [Demo](https://geraldotech.github.io/DevMap/CSS/pages/hover2.html)

### :active

- onclick see effects

### :focus

- [Focus](./focus.html) - [Demo](https://geraldotech.github.io/DevMap/CSS/pages/focus.html)

### :target

```css
:target {
  scroll-margin-top: 50px;
}
```

- <a class="links" href="https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-top">MDN</a>
- <a class="links" href="https://stackoverflow.com/questions/11386807/adding-an-automatic-offset-to-the-scroll-position-for-all-hash-links-calls">stackoverflow</a>

- <a  class="links" href="./target.html">:target.html</a> - [Demo](https://geraldotech.github.io/DevMap/CSS/pages/target.html)

- <a  href="./target-tab-selector.html" target="" class="links">:Target with Tab-Selector</a> - [Demo](https://geraldotech.github.io/DevMap/CSS/pages/target-tab-selector.html)

- [:target SPA by gmap](./target-SPA/index.html) - [Demo](https://geraldotech.github.io/DevMap/CSS/pages/target-SPA/index.html)

- [Demo scroll margin-top By gmap](https://geraldotech.github.io/DevMap/CSS/pages/scroll-margin-top/)
- <a class="links" href="https://codepen.io/geraldopcf/pen/GRwMGJW?editors=1100" target="_blank">Demo 2 scroll-margin v2 By gmap</a>

### :first-child

- [Notion](https://geraldodev.notion.site/first-child-abe5a885838a4500a62277b7c89184db)

### :last-child:

- Seleciona o VERY LAST element in a container `main`, `div`...

### :nth-child()

- sempre na ordem [nth-child.md](./nth-child.md)

### :nth-of-type

- [https://css-tricks.com/the-difference-between-nth-child-and-nth-of-type/](https://css-tricks.com/the-difference-between-nth-child-and-nth-of-type/) sempre o determinado tipo!

### :link

- [https://developer.mozilla.org/en-US/docs/Web/CSS/:link](https://developer.mozilla.org/en-US/docs/Web/CSS/:link)

### :is

- [CodePen](https://codepen.io/geraldopcf/pen/NWMVXZK) | [Twitter](https://twitter.com/addyosmani/status/1411942923671785474)

### :where

- [./where.html](./where.html) | [Demo](https://geraldotech.github.io/DevMap/CSS/pages/where.html)

### :has()

- [Get Start](../pages/has/getStart.md)

### :not

- that do not match a list of selectors

```css
/* a not has a class */
a:not([class]) {
  text-decoration: none;
}
```

- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:not)

```css
/* All divs without a `lang` attribute are italicized. */
div:not([lang]) {
  font-style: italic;
}
/* Select All sections except with a class=home */
section:not([class='home']) {
  margin-top: 10px;
}
```

### :only-child

- element sem irmão será estilizado

### :empty

- usado para selecionar elementos que não contêm nenhum elemento filho ou conteúdo de texto

```css
div:empty {
  border: 1px solid;
  padding: 4rem;
}
```

# pseudo-elements

<hr>

https://developer.mozilla.org/pt-BR/docs/Web/CSS/Pseudo-elements

- ::before
- ::after
- ::placeholder
- ::marker
- ::first-line
- ::first-letter
