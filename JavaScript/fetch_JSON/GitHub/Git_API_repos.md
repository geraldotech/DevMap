## GitAPI

Fetch all repos

```js
`https://api.github.com/users/geraldotech/repos`;

```

A resposta será um array de todos os repos, para pegar um repo especifico só chamar por repo[index]

getting repos: url

```js

//sha provalmente sempre mudam a cada novo commit
// API do repo `DevMap` 
https://api.github.com/repos/geraldotech/DevMap/

//pegar o sha subpastas direct
https://api.github.com/repos/geraldotech/DevMap/git/trees/main

//completar o sha aqui
https://api.github.com/repos/geraldotech/DevMap/git/trees/{sha} 
//.then fetch (https://api.github.com/repos/geraldotech/DevMap/git/trees/661cc2358c0741d654f6afb1620f65cc9b4b003b)


//pegar o sha repo pasta por pasta
https://api.github.com/repos/geraldotech/visa/git/refs

// adicionar o sha
https://api.github.com/repos/geraldotech/DevMap/git/trees/{sha}

//na response chamar 
console.log(data.tree);
//o retorno será um array com todas as subpastas, basta chamar por data.tree[0]

//pegar o provavel ultimo sha - a testar
cosole.log(data.tree[0].sha);


//pegar sempre o ultimo sha
1 - https://api.github.com/repos/geraldotech/DevMap/git/trees/main
2 - console.log(data.tree[0]);
3 - console.log(data.tree[0].sha);

```

Fetch tree

```js
const api = "https://api.github.com/repos/geraldotech/DevMap/git/trees/daf1cd30f89ad0ea0d48f34855c5706d023c4f21";
```