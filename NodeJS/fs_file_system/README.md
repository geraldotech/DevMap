# Node JS manipular arquivos com fs
#### necessário fs, pode criar um .js separado e ao rodar o comando node file.js o arquivo será criado
```js
const fs = require('fs');

fs.writeFile('danki.txt','teste',function(err){
    if(err) throw err;
    console.log('arquivo criado com sucesso!');
})
```

#### cria novo arquivo ou adiciona conteudo prox linha 
>>Mesmo codigo para write em um arquivo txt cada vez que receber um acesso na url
```js
fs.appendFile('danki.txt','\n outro conteudo',(err)=>{
    if(err) throw err;
    console.log('salvo novamente com sucesso! ');
})
```
Adicionar depois de readFile 


#### Leitura de arquivos
```js
const fs = require('fs');

fs.readFile('array.txt',function(err,data){

    console.log((data.toString()));;
})
```

#### criando array a partir de txt file
<a href="https://cursos.dankicode.com/campus/curso-nodejs/leitura-avancada-de-arquivos-e-funcoes-para-string">video aula</a>

```js
const fs = require('fs');
const read = require('readline');


fs.readFile('array.txt',function(err,data){
let str = data.toString();
let newStr = str.split('/');
console.log(newStr);

})
```

#### str.substr(0,3) pega apenas os 3 primeiros caracteres do texto
```js
const fs = require('fs');
const read = require('readline');

fs.readFile('array.txt',function(err,data){

let str = data.toString();
let newStr = str.substr(0,3);
console.log(newStr);

})
```
### Delete arquivos
```js
const fs = require('fs');
const read = require('readline');


fs.unlink('file2.txt',function(err){
    console.log("apagado foi (unlink) apagado!");
});
```
### Renomear arquivos
```js
const fs = require('fs');
const read = require('readline');


fs.rename('file.txt','file3.txt',function(err){
    console.log("apagado foi renomeado!");
});
```
### Extra lendo input da linha de comando createInterface
<a href="https://cursos.dankicode.com/campus/curso-nodejs/extra-lendo-input-da-linha-de-comando">Video aula</a>

```js
const { resolveNaptr } = require('dns');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Qual o seu nome? ", function(name){
    console.log(`O nome do usuario é ${name}`);
    rl.question("Qual a sua idade ",function(idade){
        console.log(`A idade do ${name} é ${idade}`);
    })
})

rl.on('close',function(){
    console.log("Good bye");
    process.exit(0);
})

```

