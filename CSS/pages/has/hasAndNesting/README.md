Now with has you can do select any selector to apply new props, without use variables.

html, body - global scope
#id - local scope

```css
body:has(#toggle[type='checkbox']:checked) .mytoggle {
  background: blue;
}
```

- nesting:

```css
:has(#opt:checked){
  .sec1 {
    color: red;
    font-family: Verdana;
  }
}


/* radio button */

.optx, .opty{
  display: none;
}

:has(#optx:checked) h2 {
  color: blue;
}

/* se for aninhar mais seletores fazer assim */
:has(#opty:checked) {
  color: red;
  h2{
    color: red;
  }
  &.sec1 {
   font-size: 1rem;
  }
}

```

https://developer.mozilla.org/en-US/docs/Web/CSS/Nesting_selector
