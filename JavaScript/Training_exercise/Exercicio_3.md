# Exercicio 3

>>usar: typeof para verificação

1. Faça um example convertendo JSON String para JavaScript Object e mostre os resultados em JSON(String) e JS(OBJ):

<details>
<summary>res</summary>

```js
//convert JSON to JS Object
    const filmesx = ('{"filme":"American Pie","ano":2003,"Country":"USA"}');
//convert direct single line 
const filmes = JSON.parse('{"filme":"American Pie","ano":2003,"Country":"USA"}');
//convert com string
const obj = JSON.parse(filmesx);
 //mostra em OBJ
console.log(obj);
    //mostra JSON
console.log(filmes);
```
</details>


2. Create a **JSON string** from a JavaScript Object and JavaScript Array: 
Fazer um JavaScript JSON from  JavaScript Object 

<details>
<summary>res</summary>

```js
//Converter JS OBJ em JSON String
//Stringify a JavaScript Object
person = {
    name: 'Geraldo',
    age: 30,
    city: 'Maceio'
}
console.log(person);
//JSON.stringify() to convert it into a string.
const myJSON = JSON.stringify(person);

//myJSON is now a string, and ready to be sent to a server:
console.log(myJSON);
```

</details>

3. JavaScript OBJECTS Array to JSON String Array:

```js
//Stringify a JavaScript Array to JSON Array
mercado = ['carnes','higiene','frutas','fritas','bebidas'];
const myjsonAR = JSON.stringify(mercado);
console.log(mercado);
console.log(myjsonAR);
```

4. Conveter um JSON String Array to JavaScript Objects Array:

```js
//JSON ARRAY
const frutas = '["Apple","orange","Grape"]';
console.log(frutas);
//converter
const myjs = JSON.parse(frutas);
console.log(myjs);
```

  4/1:  JSON OBJ Custom names:

  ```js
const aluno = {
    "Camilly":{
        nome:"Camilly Mello",
        curso:"Medicina",
        idade:29
    },
    "Geraldo":{
        nome:"Petronilo",
        curso:"SI",
        photo:'<img src="https://gpnotes.droppages.com/img/rio.jpg" />' 
    }
}
console.log(aluno.Camilly);
console.log(aluno.Geraldo);

  ```
  ...4.2: JSON Object ARRAY multiples:

```js
const aluno = {
    "Lista": [{
        nome:"Camilly Mello",
        curso:"Medicina",
        idade:29
    },
    {
        nome:"Petronilo",
        curso:"SI"
    }
]
};
console.log(aluno.Lista);


```

...4.4.2

<details>
<summary>res</summary>

```js
const mercado = {
    "carnes":[{
        nome:"Suina",
        tipo:"10",
        photo:'<img src="https://gpnotes.droppages.com/img/rio.jpg" />'
    },
    {
        nome:"frango",
        tipo:"20",
    }
]
}

//exemple custom obj name.name2.name3

banco = {
  "trigg":{
    nome:"Trigg",
    limite:6000
  },
  "sx":{
    nome:"Santander",
    limite:5000,
    "fatura":{
      valor:2.566,
      venc:27,
    }
  },
}
console.log(banco.sx.fatura);


//example

banco = {
  "trigg":{
    nome:"Trigg",
    limite:6000
  },
  "santander":{
  "sx1":{
    nome:"SX final: 5555",
    limite:5000,
    "fatura":{
      valor:2.566,
      venc:27,
    }
},
"sx2":{
    nome:"SX final: 9999",
    limite:2000,
  }
  }
}
console.table(banco.santander.sx2);



//exemplo de obj single e multilple infos
//to multiple add []
card = {
  "trigg":{
    name:"Trigg",
    psw:"2395",
    limit:"6000",
    venc:"25"
  },
  "SX":[{
    psw:2395,
    limit:5000,
    venc:5
  },
  {
    psw: 2392,
    limit:2610,
    venc: 25
  }
]
}


```

</details>


5. Percorrer itens do Array com function  forEach usando console.log 
```ts
const myarr = ['orange','banana','apple','grape','pineaple'];
myarr.forEach(listar);
function listar(item, index) {
    console.log(index+': '+item);
}
```

6. 4 tipos de type of:
```js
//return type of a string
console.log(typeof true);
console.log(typeof 2);
console.log(typeof []);
console.log(typeof 'ola');
```

7. Similar a questão 15º porém ao contrário.reverse, faça uma função que mostra o conteudo de um Array e no final chame a função com forEach adicionando novos valores e mostrando os indexs:

```js
function meuarr(element,index){
  console.log("["+index+"] = "+element )
}
[1,2,3,4].forEach(meuarr);
```

8. Sobre a tag <span> é utilizada geralmente dentro de uma linha, facilitando a estilização de uma parte específica de um texto ou a manipulação com JavaScript:
Faça um exemplo

```js
   <p>Seja Bem Vindo ao nosso: <span id="num"></span> exemplo com JS tag <xmp><span></span></xmp></p>
    <input type="button" onclick="my()" value="Ok">

    //js
        function my(){
            document.getElementById('num').innerHTML = 'site';
  }
```

9. As duas formas de fazer reload na página: direct onbutton ou call function:
```js

    reload page:
function reload(){
    window.location.reload();
}
//window ou not works
function reload(){
    location.reload();
}
```

<button onclick="location.reload()">RELOAD</button>

[grace accent relacionado a Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

