# CSS

[Animations Library](https://animista.net/)

## Animation + keyframes

<details>
<summary>show code</summary>

- from to

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

- color

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

- opacity

```cs

 .lead {
        font-size: 2rem;
        animation: lead 5s ease-in-out;
      }

      @keyframes lead {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }


      //html
       <p class="lead">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
      corrupti quibusdam impedit asperiores nemo necessitatibus esse dignissimos
      cupiditate possimus culpa quam, rem, voluptates nulla. Ea aliquid tenetur
      et accusantium id.
    </p>
```

- 0% to 100%

```css
@keyframes animacao {
  0% {
    opacity: 0;
    /* font-size: 3rem; */
  }
  100% {
    opacity: 1;
    font-size: 1rem;
  }
}
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
