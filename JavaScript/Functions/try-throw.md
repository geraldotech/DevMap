
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