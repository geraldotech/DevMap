# pseudo-class has()


- <a href="https://geraldotech.github.io/DevMap/CSS/pages/selector-combinators.html#general-sibling" target="_blank">before :has I really recommend read this Adjacend Sibling and General Sibling Seletor type checkbox checked + label</a>


> return booelan

- [fromScratch](#fromscratch)
- [Links - fazendo menu](#links)
- [has and Nesting](./hasAndNesting/README.md)

# fromScratch

## element :has() {...}

```css
element:has(condition) {
  will apply styles to element
}
```

section has `span` descendent `true`?

```css
section:has(span) {
  color: red;
}
```

Child Selector: Apenas se span for child de section:

```css
section:has(> span) {
  background: violet;
}
```

Contextualizando

```css
section span {
  zbackground: violet;
}
/* equivalent to */
section:has(span) span {
  background: violet;
}

section > span {
  color: red;
}
/* equivalent to */
section:has(> span) span {
  color: purple;
}
```

se `h1` tiver um irmão `P` adjacente então => h1

```css
h1:has(+ p) {
  color: cadetblue;
}

h1 + p {
  background: red;
}
/* equivalent to */
h1:has(+ p) + p {
  color: cadetblue;
}
```

`article` tiver algum dessas tags então `article`

```css
article:has(h2, ul) {
  background: red;
}
```

## element :has() element {...}

```css
element:has(condition) element2 {
  will apply styles to to the element2 }
```

section que `has` span como child então => p

> if this Child Selector is true... p get styles...

```css
section:has(> span) p {
  font-size: 1.5rem;
  color: coral;
}
```

section que tiver span como Descendant então => button

> span is decendent of section? button inside section get styles

```css
section:has(span) button {
  background: violet;
}
```

`true` ? então => #home

> section:has span like children element with tag #home inside section get styles

```css
section:has(> span) #home {
  color: red;
}
```

# checkbox

### From scratch

- Antes é necessário entender que o primeiro elemento define se a condição será Global ou scoped, `e.g html, body` afetam todo o `document`, usar tags como label ou um #ID vai afetar os filhos que estão encapsulados nos respectivos elementos.

```js
  [global,tags,#id]:has(condition...) {
  .....
  }
```

Se a condição for true a alteração será realizada mesmo sem :checked

```js
body:has([type="checkbox"]) {
  --bkbody: red;
}

// checked html  + body
html:has([type="checkbox"]:checked) body   {
  background: dodgerblue;
}

// body only
body:has(input[type='checkbox']:checked){
  background: rebeccapurple;
} 
```

- Scopo Global, se no `body` tem algum checkbox checked then...

```css

// altera o valor da variável afetando todos os seletores que fazem uso.
:root {
  --bkbody: rgb(33, 188, 199);
}

body:has([type='checkbox']:checked) {
  --bkbody: rgb(170, 30, 30);
}
label {
  color: var(--bkbody);
}
```

- Global #id

  > by gmap se no body tem esse #id com checkbox: checked então mude o valor da variável mesmo que os elements não estejam encapsulado no respectivo #id

```css
/* NO SPACE BETWEEN ID AND [] */
body:has(#test[type='checkbox']:checked) {
  --bkbody: rgb(170, 30, 30);
}
```

- Scopo Local, o target deve estar encapsulado no #id
  > se mudar `id` para `body` ou `html` isso vai afetar todas as labels do body tornando nosso scopo global, usar #id que tiver o "checkbox" checked... better para especificidade

```css
:root {
  --label: rgb(33, 188, 199);
}

#sec:has([type="checkbox"]:checked) {
  --label: rgb(165, 6, 165);
}

label {
  color: var(--label);
}

/* html encapsular todos os elements */
 <section id="sec">
      <label>
        <input type="checkbox" />
        check
      </label>
  </section>
```

label only

```css
label:has([type="checkbox"]:checked) {
  --bkbody: red;
}

 <label>
      <input type="checkbox" />
      red
    </label>
```

A beautiful exemplo de como usar vários checkbox em section/div com mesmo #id passando um nome na input, necessário chamar body,html

```css
body:has(#menu[type='checkbox'][name='del']:checked) {
  --txtDe: none;
}

body:has(#menu[type='checkbox'][name='font']:checked) {
  --bodyFS: 1.2rem;
}

html:has(#menu[type='checkbox'][name='fontFamily']:checked) {
  --family: cursive;
}
```

Selecionando vários checkbox globalmente, náo querer #id porém precisa indiciar o name

```css
body:has([type='checkbox'][name='a']:checked) {
  --bkbody: red;
}

html:has([type='checkbox'][name='b']:checked) {
  --bkbody: dodgerblue;
}
```

### select:

```css
//html template
<select name="" id="scratch">
      <option value=""></option>
      <option value="1">HTML</option>
      <option value="2">CSS</option>
</select>


//css
/* define variables */
:root {
  --html: none;
  --css: none;
}

/* set var */
.html {
  display: var(--html);
}
.css {
  display: var(--css);
}

/* define has, space between id and option */
body:has(#scratch option[value='1']:checked) {
  --html: block;
}

/* define has */
body:has(#scratch option[value='2']:checked) {
  --css: block;
}
```

# links

Usando has() em radio, checkbox e select manipulando as var do CSS fiz esse exemplo com muita dedicação 🙂

- [Radio, select and checkbox](https://geraldotech.github.io/DevMap/CSS/pages/has/radio-select.html)

O princípio para alinhar elementos e como aplicar o has() nessas situações:

- [from-scratch-align-ele-and-has.html](https://github.com/geraldotech/DevMap/blob/main/CSS/pages/has/from-scratch-align-ele-and-has.html) | [Demo](https://geraldotech.github.io/DevMap/CSS/pages/has/from-scratch-align-ele-and-has.html)
