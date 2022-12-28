# Vanilla Includes

👉Final code:Todos os exemplos estão nas respectivas pastas

## for

código inicial sem `try` and `catch`

```js
const tag = document.querySelectorAll("p");
for (let i = 0; i < tag.length; i++) {
  let file = tag[i].getAttribute("ing");
  console.log("file", file);

  inclui(file, tag[i]);
}

async function inclui(file, el) {
  const req = await fetch(file);
  const res = await req.text();

  el.innerHTML = res;
}
```

A ideia é selecionar a tag alvo, basicamente podemos usar qualquer tag, sendo as que incluir o determinado `attribute` o value será usado no fetch, recomendo usar tag de display: block, algumas [aqui](https://www.w3schools.com/html/html_blocks.asp)

Vamos analisar o código:

- podemos remover o `Array.from` tendo em vista que os metodos funcionam bem com a NodeList gerada pelo querySelectorAll
- Podemos atribuir o attr a uma string

```js
const tag = document.querySelectorAll("div");
const toArr = Array.from(tag);
for (let i = 0; i < toArr.length; i++) {
  let path = toArr[i].getAttribute("include");
  let fileHas = toArr[i].hasAttribute("include");
  console.log("attrValue", path, fileHas);

  inclui(path, toArr[i]);
}

async function inclui(path, el) {
  try {
    const req = await fetch(path);
    console.log(req);
    if (req.status == 200) {
      const res = await req.text();
      el.innerHTML = res;
    }
  } catch (err) {
    console.log(err);
  }
}
```

- Caso o attr não tenha o value, no console será mostrado um erro ref a cada tag que não tiver value, imagina usar 10 divs serão 10 erros, podemos então adotar uma tag especial que será usada apenas para incluir arquivos.

- Ah mais eu quero usar `div` então precisamos melhorar nosso código para evitar tais erros no console quando não encontrar o `path`, simplesmente podemos usar um if() que só chama a funct para os `true`

Final code:

```js
const tag = document.querySelectorAll("div");
const DOMatt = "include";
for (let i = 0; i < tag.length; i++) {
  let path = tag[i].getAttribute(DOMatt);
  let fileHas = tag[i].hasAttribute(DOMatt);
  //linha para log de arquivos
  //console.log("attrValue", path, fileHas);
  if (fileHas) {
    inclui(path, tag[i]);
  }
}

async function inclui(path, el) {
  try {
    const req = await fetch(path);
    //console.log(req);
    if (req.status == 200) {
      const res = await req.text();
      el.innerHTML = res;
    }
  } catch (err) {
    console.log(err);
  }
}
```

### Usando Array filter [my favorite]

- Depois do querySelectorAll vamos usar o Array.from;

```js
//Faz um filter dos elements que tem o attribute, logo em seguida get o value desses attributes
const filter = toArr
  .filter((val) => val.hasAttribute("include"))
  .map((a) => a.getAttribute("include"));
//code final

const tag = document.querySelectorAll("div");
const toArr = Array.from(tag);
const filter = toArr
  .filter((val) => val.hasAttribute("include"))
  .map((a) => a.getAttribute("include"));

console.log(filter);
for (let i = 0; i < filter.length; i++) {
  //console.log(filter[i]);
  inclui(filter[i], toArr[i]);
}

async function inclui(path, el) {
  try {
    const req = await fetch(path);
    //console.log(req);
    if (req.status == 200) {
      const res = await req.text();
      el.innerHTML = res;
    }
  } catch (err) {
    console.log(err);
  }
}
```

Sim podemos melhorar fazendo uma function para esse filter e map e jogando o Array.from direto no selector

para nosso code ficar melhor vamos attribuir o resultado dessa função a uma const, sim se vc jogar no loop attri(toArr, "include").length funciona assim como attri(toArr, "include")[i]

Final code:

```js
const tag = Array.from(document.querySelectorAll("div"));
//fun filter
function attri(arr, val) {
  return arr
    .filter((el) => el.hasAttribute(val))
    .map((a) => a.getAttribute(val));
}

const filterFun = attri(tag, "include");

for (let i = 0; i < filterFun.length; i++) {
  //console.log(filter[i]);
  inclui(filterFun[i], tag[i]);
}

async function inclui(path, el) {
  try {
    const req = await fetch(path);
    //console.log(req);
    if (req.status == 200) {
      const res = await req.text();
      el.innerHTML = res;
    }
  } catch (err) {
    console.log(err);
  }
}
```

## for Of

### Usando String para armazenar os paths

Final code:

```js
const div = document.querySelectorAll("div");
let [path, domAttr] = ["", "include"];
for (attr of div) {
  if (attr.hasAttribute(domAttr)) {
    path = attr.getAttribute(domAttr);
    console.log(`path:`, path, `attr:`, attr);
    inclui(attr, path); //fun fica dentro da condicao if
  }
}

async function inclui(el, path) {
  try {
    const req = await fetch(path);
    //console.log(req);
    if (req.status == 200) {
      const res = await req.text();
      el.innerHTML = res;
    }
  } catch (err) {
    console.log(err);
  }
}
```

### Usando push(Array)

Aqui a iteração sempre vai adicionando um novo item a cada chamada, o que pode causar um 404 Error a partir do segundo item pq vai tentar pegar `http://127.0.0.1:5501/test.html,./a.txt` o ideal é pegar apenas o último item verifique a saída do console para melhor entendimento.

Formar de resolver esse `bug`:

1 - Adicionar fatiar -1: `slice(-1)`, na chamada da function: `inclui(attr, arrPath.slice(-1));`

2 - Adicionar method get último: `pop()` na chamada `inclui(attr, arrPath.pop());`

3 - Descobri que usando o `splice()` podemos limpar o Array antes de adicionar novo item ` inclui(attr, arrPath.splice(""));`

4 - Podemos adicionar `pop()` direto no loop `arrPath.pop();`

Final code:

```js
const div = document.querySelectorAll("div");
//Array vazio e string do atribudo
const [arrPath, domAttr] = [[], "include"];
for (attr of div) {
  if (attr.hasAttribute(domAttr)) {
    arrPath.push(attr.getAttribute(domAttr));
    console.log(`path:`, arrPath);
    console.log(`attr:`, attr);
    inclui(attr, arrPath);
    //arrPath.pop();
  }
}

async function inclui(el, path) {
  try {
    const req = await fetch(path);
    //console.log(req);
    if (req.status == 200) {
      const res = await req.text();
      el.innerHTML = res;
    }
  } catch (err) {
    console.log(err);
  }
}
```

5 - Usando `unshit()` que adiciona items na primeira posição, depois só chamar por `arr[0]`

Final Code:

```js
const div = document.querySelectorAll("div");
//Array vazio e string do atribudo
const [arrPath, domAttr] = [[], "include"];
for (attr of div) {
  if (attr.hasAttribute(domAttr)) {
    arrPath.unshift(attr.getAttribute(domAttr));
    console.log(`path:`, arrPath);
    console.log(`attr:`, attr);
    inclui(attr, arrPath[0]);
  }
}
```
