const express = require("express");
const path = require("path");
/* const { resourceUsage } = require('process');  nao sei de onde surgiu*/
const app = express();
const bodyParser = require("body-parser");

//body-parser
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//receita bolo
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use("/public", express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "/views"));

var tarefas = ["arrumar quarto", "fazer compras", "teclado"];

//add tarefa
app.post("/", (req, res) => {
  //console.log(req.body.tarefa);
  tarefas.push(req.body.tarefa);
  res.render("index", { tarefaslist: tarefas });
});

//index page
app.get("/", (req, res) => {
  res.render("index", { tarefaslist: tarefas });
});

app.get("/deleter/:id", (req, res) => {
  //console.log(req.params.id);
  tarefas = tarefas.filter(function (val, index) {
    if (index != req.params.id) {
      return val;
    }
  });

  res.render("index", { tarefaslist: tarefas });
});

app.listen(5000, () => {
  console.log("server is on port 5000");
});
