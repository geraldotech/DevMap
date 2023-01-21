# How use EJS template

> EJS by default looks into 'Views' folder

- install express
- install express-ejs
- criar a pasta views mkdir `views`

## code js in html, ejs

```js
<%= your code %>
```

Full code ejs

```js
const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs"); //engine irá buscar .ejs
app.set("views", "./views"); // define a pasta

// routers
app.get("/", (req, res) => {
  //res.send("Pagina inicial");
  res.render("index", {});
});

app.get("/about", (req, res) => {
  //res.send("Pagina inicial");
  res.render("about", {});
});

app.listen(3000, () => {
  console.log(`server running on port ${port}`);
});
```

Usando Arrays, open server_array_mode
[ref](https://www.treinaweb.com.br/blog/utilizando-template-engine-ejs-com-node-js)

# EJS Partials - includes

`<%- include('footer'); %>`
`<%- include('footer.html'); %>`

### Passando objects no render:

`res.render('about',{me: "Geraldo"});`

- no ejs

```js
<%= me.length %>
<%= me %>

```

- Array

```js
const me = ["Geraldo", "apple", "orange"];

res.render("about", { me });
```
