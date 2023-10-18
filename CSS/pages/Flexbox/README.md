<h1 align="center">Flexbox
</h1>

## Become a **Flexbox ninja** now!

#### Best links:

- [MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
- [css-tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [origamid](https://origamid.com/projetos/flexbox-guia-completo/)
- [https://flexbox.malven.co/](https://flexbox.malven.co/)
- [Flexbox contex by gmap](./by_gmap/flexbox_contex.html) | [Live](https://geraldotech.github.io/DevMap/CSS/pages/Flexbox/by_gmap/flexbox_contex.html)
- [more check folder] »» `DevMap\CSS\pages\FlexBox`

# Properties

| Parent / Container                                      | Child / Item                                                              |
| ------------------------------------------------------- | ------------------------------------------------------------------------- |
| display                                                 | flex                                                                      |
| [flex-direction](#flexdire)                             | flex-grow                                                                 |
| [flex-wrap](#flexwrap)                                  | flex-shrink                                                               |
| [flex-flow](#flexflow)                                  | flex-basis                                                                |
| [justify-content](#justifycontent)                      | [order](https://developer.mozilla.org/en-US/docs/Web/CSS/order)           |
| [align-items](#alignitems)                              | [align-self](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self) |
| [align-content](#aligncontent)                          |                                                                           |
| [gap](https://css-tricks.com/almanac/properties/g/gap/) |                                                                           |

Explicações a fundo visitar os **bests links**.

<details>
<summary> <a id="flexdire">flex-direction</a></summary>
<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox" target="_blank">Axis</a>
<ol>
<li>row ➡️default</li>
<li>row-reverse</li>
<li>column</li>
<li>column-reverse</li>
</ol>
</details>
<details>
<summary> <a id="flexwrap">flex-wrap</a></summary>
<p><strong>Considerar que:</strong>

wrap with width fixed: e.g `width: 800px` o wrap obviamente dont work por causa da largura fixa

container must be: `max-width` or sem width definida.

</p>
<ol>
<li>nowrap ➡️default</li>
<li>wrap</li>
<li>wrap-reverse</li>
</ol>
</details>
<details>
<summary> <a id="flexflow">flex-flow</a></summary>
<p>O flex-flow é um atalho para as propriedades flex-direction e flex-wrap. Você não verá muito o seu uso, pois geralmente quando mudamos o flex-direction para column, mantemos o padrão do flex-wrap que é nowrap.
E quando mudamos o flex-wrap para wrap, mantemos o padrão do flex-direction que é row.</p>

<ol>
<li>row nowrap</li>
<li>row wrap</li>
<li>column nowrap</li>
</ol>
</details>
<details>
<summary> <a id="justifycontent">◀️justify-content▶️</a></summary>
<ol>
<li>flex-start</li>
<li>flex-end</li>
<li>center</li>
<li>space-between</li>
<li>space-around</li>
</ol>
</details>
<!-- new details -->
<details>
<summary> <a id="alignitems">🔽align-items🔼</a></summary>
<ol>
<li>stretch ➡️default</li>
<li>flex-start</li>
<li>flex-end</li>
<li>center</li>
<li>baseline</li>
</ol>
</details>
<!-- new details -->
<details>
<summary> <a id="aligncontent">align-content</a></summary>
<p>align-content: works with flex-wrap: wrap;
sobrepoe o align-self <a href="https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_align-content">REF</a> basicamente diz o alinhamento que deve ser quando o wrap acontecer, open <a href="https://geraldotech.github.io/DevMap/CSS/pages/Flexbox/flex_contex.html#aligncontent">this example</a> diminua a janela e observe.

</p>
<ol>
<li>stretch ➡️default</li>
<li>flex-start</li>
<li>flex-end</li>
<li>center</li>
<li>space-between</li>
<li>space-around</li>
</ol>
</details>

&nbsp;
&nbsp;
&nbsp;
&nbsp;

# Child / Item

- Constituent properties
  - Grow: 0 1 2
  - Shrink: 1 0 2
  - Basis: px %
  - [Grow, Shrink, Basis by gmap](https://geraldotech.github.io/DevMap/CSS/pages/Flexbox/flex_gsb.html)
  - [this constituent-context flex: by gmap](https://www.notion.so/geraldodev/flex-contex-4ef64b877ac84aba97bd731428be7b17)

#### Refs:

- [https://www.developerdrive.com/holy-grail-layout-flexbox/](https://www.developerdrive.com/holy-grail-layout-flexbox/)
