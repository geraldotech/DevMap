
Both approaches achieve the desired outcome, but the "best" approach can depend on the context and requirements of your code.

```js
✅
if(name !== 'g'){
   throw new Error('nao permitido')
} 
console.log('success')

✅
if (name !== 'g') {
    console.dir('nao permitido');
    return;
} 
console.log('success');


❌
if(name == 'gera'){
   console.log('oi geraldo')
} 
throw new Error('nao permitido')

✅
if (name === 'gera') {
    console.log('oi geraldo');
} else {
    throw new Error('nao permitido');
}
```

### try catch

```js
function sayHello(){
  try{
    ola()
  } catch(e) {
    console.log(e.message)
  }

}
sayHello()

```

### try throw catch

```js
function numero(val) {
  try {
    if (val == null) throw "vazio";
    if (val == "") throw "string vazio";
    if (val == 4) throw "four";
    if (val == "logi") throw "logitech";
    if (val) throw val;
  } catch (err) {
    console.log(err);
  }
}
numero("ge");

```

### try catch finally

```js
function soma(n) {
  try {
    if (typeof n !== 'number') {
      throw new Error('O valor deve ser um número!')
    }

    console.log(n + 54)
  } catch (e) {
    console.log(`Erro capturado: ${e.message}`)
  } finally {
    console.log('Processo finalizado, independentemente de erros.')
  }
}

soma('hge') // Simulando o erro
soma(2010) // sem erros



```