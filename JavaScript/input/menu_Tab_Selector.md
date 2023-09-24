#### [CodePen by Isadora](https://codepen.io/geraldopcf/pen/ZExLmbX)

#### [CodePen_projeto_v2_gmap](https://codepen.io/geraldopcf/pen/WNJpPOG)

html

```html
<ul>
  <li class="item active" data="service">Serviços</li>
  <li class="item" data="contact">Contato</li>
  <li class="item" data="info">Informações</li>
</ul>
<div id="serviceText">
  <p>Service text
  <img src="https://i.stack.imgur.com/ntg5f.png" alt="img" style="max-width:50%" />
  </p>
</div>
<div id="contactText">
  <p>contact text</p>
</div>
<div id="infoText">
  <p>info text</p>
</div>me=show_subcategory">link</a>
```

css

```css
ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  width: 400px;
  margin: 100px auto 20px;
}

div {
  width: 400px;
  margin: 20px auto;
}

ul li {
  height: 25px;
  padding: 0 10px;
  cursor: pointer;
}

.active {
  color: blue;
  font-weight: bolder;
  border-bottom: 1px solid red;
}
```

js

```js
const serviceText = document.getElementById('serviceText')
const contactText = document.getElementById('contactText')
const infoText = document.getElementById('infoText')
const items = Array.from(document.getElementsByClassName('item'))

hideOrShowTextDiv('service')

items.forEach((item) => {
  item.addEventListener('click', onItemClick)
})

function onItemClick(event) {
  const selectedAttribute = event.target.getAttribute('data')
  addOrRemoveActive(selectedAttribute)
  hideOrShowTextDiv(selectedAttribute)
}

function hideOrShowTextDiv(selectedAttribute) {
  hideTextElements()

  if (selectedAttribute === 'contact') {
    contactText.style.display = 'block'
  }

  if (selectedAttribute === 'service') {
    serviceText.style.display = 'block'
  }

  if (selectedAttribute === 'info') {
    infoText.style.display = 'block'
  }
}

function addOrRemoveActive(selectedAttribute) {
  items.forEach((item) => {
    const itemAttribute = item.getAttribute('data')
    if (itemAttribute === selectedAttribute) {
      item.classList.add('active')
      return
    }

    item.classList.remove('active')
  })
}

function hideTextElements() {
  serviceText.style.display = 'none'
  contactText.style.display = 'none'
  infoText.style.display = 'none'
}
```
