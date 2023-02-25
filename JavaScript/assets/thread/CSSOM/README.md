<h1 align="center">CSS Object Model </h1>

[https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model)

Manipulation of CSS from JavaScript

# Getting the stylesheet List all

```js
const styles = document.styleSheets;

//Get index
console.log(styles[0]);
//Get href
console.log(styles[1].href);
//Get cssText
console.log(styles[1].cssRules[0].cssText);
```

# style

Using style in this manner will completely overwrite all inline styles on the element.

- [HTMLElement.style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)
- [DOM_obj_style-for-CSS](https://www.w3schools.com/jsref/dom_obj_style.asp)

# setProperty

- [Change theme by GI](https://codepen.io/geraldopcf/pen/GRxyZMg?)
- [setProperty.html](setProperty.html)

#### Apply dark mode:

```js
const root = document.documentElement;
root.style.setProperty("color-scheme", "dark");

//v2
const tag = document.getElementsByTagName(`html`);
tag[0].style.setProperty(`color-scheme`, `dark`);

//v3
const theme = `color-scheme:dark`;
document.querySelector("html").style = theme;

//v4
document.querySelector(":root").style = `color-scheme:dark`;
```

Estude também o `window.getComputedStyles` returns an object containing the values of all CSS properties of an element, after applying active stylesheets and resolving any basic computation those values may contain.

- <a href="https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_getcomputedstyle">W3</a>
- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle)
- [CodePen](https://codepen.io/geraldopcf/pen/VwBvyPw)
