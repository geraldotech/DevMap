Now with has you can do select any selector to apply new props, without use variables.

html, body - global scope
#id - local scope

```css
body:has(#toggle[type='checkbox']:checked) .mytoggle {
  background: blue;
}
```

- Nesting:

```css
:has(#opt:checked) {
  .sec1 {
    color: red;
    font-family: Verdana;
  }
}

/* Nesting */
body:has(#test[type='checkbox']:checked) {
  background: rgb(170, 30, 30);
  & .divroot {
    border: 1px solid rgb(18, 7, 141);
  }
}

/* radio button */
.optx,
.opty {
  display: none;
}

:has(#optx:checked) h2 {
  color: blue;
}

/* se for aninhar mais seletores fazer assim */
:has(#opty:checked) {
  color: red;
  h2 {
    color: red;
  }
  &.sec1 {
    font-size: 1rem;
  }
}

/* Multiple Nesting */
body:has(#test[type='checkbox']:checked) {
  background: rgb(170, 30, 30);

  .divroot {
    border: 1px solid rgb(18, 7, 141);

    section {
      background-color: purple;
    }
  }
  span {
    font-size: 2rem;
    display: none;
  }
  .foo {
    display: flex;
    justify-content: space-between;
  }
}

```

https://developer.mozilla.org/en-US/docs/Web/CSS/Nesting_selector
