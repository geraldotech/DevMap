## Block Element Modifier 

[https://getbem.com/introduction/](https://getbem.com/introduction/)

É uma metodologia aplicada no CSS, na qual aplicamos uma nomeclatura específica às classes para que o código CSS fique mais legível.

## Block: parent element - bloco pai

```js
<section class="card">

</section>
```

## Element: child element - element filho 
são identificados com dois underlines `__` após o nome da classe BLOCK

```js
<section class="card">
<a href="#" class="card__link">Buy</a>
</section>
```

## Modifier: modificador 
é identificado por dois traços `--` após um BLOCK ou ELEMENT. Este faz modificações que podem ser reutilizadas, e.g, um link rosa que possui uma variação maior na cor turquesa.

```js
  <section class="card">
    <a href="#" class="card__link">Buy</a>
    <a href="" class="card__link--highlight">Buy Now</a>
    </section>

<section class="cartao--red">
<p>Modifier pode acontecer em um BLOCK não é exigido um ELEMENT</p>
</section>
```


>Full example
```html
  <section class="card">
    <img class="card__img" src="https://www.w3schools.com/jsref/klematis.jpg" alt="">
    <a href="#" class="card__name">Flor</a>
    <div class="price">
      <p class="price__value--old">R$ 3000</p>
      <p class="price__value">R$ 2500</p>      
    </div>
  </section>

```
