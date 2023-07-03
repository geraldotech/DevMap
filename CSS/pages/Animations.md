# CSS

## Animation + keyframes

<details>
<summary>show code</summary>

```cs

.banner{
    width: 200px;
    height: 40px;
    padding: 10px;
    font-size: 2rem;
    text-align: center;
    animation-name: meubanner;
    animation-duration: 5s;

}

@keyframes meubanner{
    from{
        background: green;
        border-radius: 50px;
        color: #f2f2f2;
    }
    to{
        background: red;
        color: black;
    }
}
```

```css
h1 {
  color: coral;
  transition: 16s;
  font-size: 3em;
  text-align: center;
  font-style: italic;
  text-transform: uppercase;
  letter-spacing: 1rem;
  animation: novo 5s infinite;
}

@keyframes novo {
  to {
    color: blue;
  }
}

//html
<h1>Geraldox</h1>
```

</details>

## transition :hover

<details>
<summary>show code</summary>

```css
.box {
  font-size: 25px;
  display: table;
  border: 1px solid black;
  border-radius: 50%;
  padding: 10px;
  transition: 4s;
}
.box:hover {
  background: red;
  border-radius: 15px;
  border: 4px solid black;
  color: yellow;
  padding: 15px;
}
```

</details>
