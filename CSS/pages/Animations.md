# Animation

- [Animation {name} {duration}{timing function}{etc...}](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)

- [Animations Library](https://animista.net/)

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

# Scroll-driven Animations

- [scroll-driven-animations.style](https://scroll-driven-animations.style/tools/view-timeline/ranges/#range-start-name=cover&range-start-percentage=0&range-end-name=cover&range-end-percentage=50&view-timeline-axis=block&view-timeline-inset=0&subject-size=smaller&subject-animation=reveal&interactivity=clicktodrag&show-areas=yes&show-fromto=yes&show-labels=yes)
- scroll()
- view() - quando o elemento começa a aparecer na tela

- checkout folder `vanilla-scroll-driven-animations`

# Transition

- [READ MORE, Transition + transform](https://www.w3schools.com/css/css3_transitions.asp)

- `transition: all` - all props
- `transition: width 2s, height 4s ` - Change specificProperty Values

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

/* eg: 2 */
h1 {
  color: coral;
  transition: 00.3s;
}

h1:hover {
  color: blue;
  font-family: Arial, Helvetica, sans-serif;
}

/* eg: 3 */
input:checked + h1 {
  color: blue;
  transition: 3s;
  font-family: Arial, Helvetica, sans-serif;
}
```

</details>

- `:hover` animation img + links

```css
<a href="#">  <img src="https://placehold.co/850x1000" alt="" /></a>


a,
img {
  display: block;
  max-width: 50%;
}

a {
  transition: all 0.3s;
}
a:hover {
  transform: scale(1.1);
}
```
