


Now with has  you can do select any selector to apply new props


html, body - global scope
#id - local scope

```css
body:has(#toggle[type="checkbox"]:checked) .mytoggle{
  background: blue;
}
```

https://developer.mozilla.org/en-US/docs/Web/CSS/Nesting_selector