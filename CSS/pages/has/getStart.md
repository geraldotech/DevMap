# pseudo-class has()

- [fromScratch - do começo](#fromscratch)
- [Links - fazendo menu](#links)

# fromScratch

section que tiver span como filho então section =>

```cs
section:has(> span){
    background: violet;
}
```

section que has span como child entao => p
obs: caso a span estive entre divs isso não vai funcionar como já foi visto em CSS Combinators

```cs
section:has(> span) p{
  font-size:1.5rem;
  color: coral;
}
```

section que tiver span como Descendant então => button

```cs
section:has(span) button{
    background: violet;
}
```

se mudar para body, html:has vai afetar todas as labels do body
section/label vai afetar todas
#id que tiver "checkbox" checked... better para especificidade

```cs
#sec:has([type="checkbox"]:checked) {
        --label: rgb(165, 6, 165);
      }

```

se h1 tiver um irmao P adjacente então => h1

```cs
h1:has( + p){
    color: cadetblue;
}
```

by gmap
se no body tem esse #id com checkbox: checked então mude a var

```cs
body:has(#test [type="checkbox"]:checked) {
        --bkbody: rgb(170, 30, 30);
 }
```

um belo exemplo de como usar varios checks em uma section/div com mesmo #id passando um nome na input, necessário chamar body,html

```cs
 */
  body:has(#menu [type="checkbox"][name="del"]:checked) {
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

```cs
article:has(h2, ul){
  background: red;
}

```

# links

Usando has() em radio, checkbox e select manipulando as var do CSS fiz esse exemplo com muita deficação 🙂

- [Radio, select and checkbox](https://geraldotech.github.io/DevMap/CSS/pages/has/radio-select.html)

O princípio para alinhar elementos e como aplicar o has() nessas situações:

- [from-scratch-align-ele-and-has.html](/has/from-scratch-align-ele-and-has.html) | [Demo](https://geraldotech.github.io/DevMap/CSS/pages/has/from-scratch-align-ele-and-has.html)
