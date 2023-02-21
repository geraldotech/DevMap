# pseudo-class has()

- [fromScratch - do começo](#fromscratch)
- [Links - fazendo menu](#links)

# fromScratch

section que tiver span como filho então section =>

```css
section:has(> span) {
  background: violet;
}
```

section que has span como child entao => p
obs: caso a span estive entre divs isso não vai funcionar como já foi visto em CSS Combinators

```css
section:has(> span) p {
  font-size: 1.5rem;
  color: coral;
}
```

section que tiver span como Descendant então => button

```css
section:has(span) button {
  background: violet;
}
```

se h1 tiver um irmão P adjacente então => h1

```css
h1:has(+ p) {
  color: cadetblue;
}
```

# checkbox

- Global, se no `body` tem algum checkbox checked then...

```css
:root {
  --bkbody: rgb(33, 188, 199);
}

body:has([type="checkbox"]:checked) {
  --bkbody: rgb(170, 30, 30);
}
label {
  color: var(--bkbody);
}
```

- scopo local por assim dizer, o target deve estar encapsulado no #id
- se mudar `id` para body ou html:has isso vai afetar todas as labels do body
  #id que tiver o "checkbox" checked... better para especificidade

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
      <label for="">
        <input type="checkbox" />
        check
      </label>
  </section>
```

> by gmap se no body tem esse #id com checkbox: checked então mude a var mesmo que o element não esteje encapsulado no #id

```css
body:has(#test [type="checkbox"]:checked) {
  --bkbody: rgb(170, 30, 30);
}
```

um belo exemplo de como usar varios checks em uma section/div com mesmo #id passando um nome na input, necessário chamar body,html

```css
*/ body:has(#menu [type="checkbox"][name="del"]:checked) {
  --txtDe: none;
}

body:has(#menu [type="checkbox"][name="font"]:checked) {
  --bodyFS: 1.2rem;
}

html:has(#menu [type="checkbox"][name="fontFamily"]:checked) {
  --family: cursive;
}
```

article tiver algum dessas tags então article

```css
article:has(h2, ul) {
  background: red;
}
```

# links

Usando has() em radio, checkbox e select manipulando as var do CSS fiz esse exemplo com muita deficação 🙂

- [Radio, select and checkbox](https://geraldotech.github.io/DevMap/CSS/pages/has/radio-select.html)

O princípio para alinhar elementos e como aplicar o has() nessas situações:

- [from-scratch-align-ele-and-has.html](https://github.com/geraldotech/DevMap/blob/main/CSS/pages/has/from-scratch-align-ele-and-has.html) | [Demo](https://geraldotech.github.io/DevMap/CSS/pages/has/from-scratch-align-ele-and-has.html)
