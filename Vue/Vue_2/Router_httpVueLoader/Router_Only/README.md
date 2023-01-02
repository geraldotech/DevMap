Assim já faz o hash open direct

```js

var router = new VueRouter({
  routes: routes,
}
```

remove o hash

```js
mode: "history";
```

if add + mode history o hash permanece porém não abre direto nada muda

```js
base: "#";
```

only this = hash direct ok

```js
base: "#";
```

e se remove mode: history o hash volta open direct

```js
base: window.location.origin;
```

outras:

```js
base: "/#apps",
base: "/app",
```
