# Criar seus proprios módulos

>>usar o console para ver os logs
### 
1. Fazer uma pasta e o arquivo smart.js com alguma função..
```js
function hello(){
    console.log('Ola mundo');
}

    var n = 10;

    var obj = {nome:'Geraldo',idade:29};
    exports.hello = hello
    exports.nn = n;
    exports.obj = obj;
```
 
2. index.js adicionar require e call function:

```js
const smart = require ('./smart.js');


smart.hello();
console.log(smart.nn);
//acessando objetos
console.log(smart.obj.nome);
```

# Exportando Classes

1. Fazer arquivo para classes
```js
    class Smart{
    constructor(){
        console.log('funcionando')
    }

    teste() {
       console.log('Invocando testes')
     }
     }

    module.exports = Smart; //tem que ser Maiusculo
```
2.No index.js: 
```js
    const Smart = require('./smart.js')

    new Smart();
```
3. class com constructor  

```js
    class Smart{
        constructor(){
        this.nome = 'Geraldo';
        this.teste();
        }
        teste() {
        console.log(this.nome)
    }
    }

    module.exports = Smart; //tem que ser Maiusculo
```




