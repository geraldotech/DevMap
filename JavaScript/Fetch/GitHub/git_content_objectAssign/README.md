## Sample Fetch Git Contents

```js
// gitUser + main directory + /contents/ + sub directories
const url =
  "https://api.github.com/repos/geraldotech/DevMap/contents/Vue/Vue_2/";

async function fetchRepoInfo(url) {
  const req = await fetch(url);
  const res = await req.json();
  console.log(res);
}
fetchRepoInfo(url);
```

## Download Files from Directory

### Manual

```js
base_url: https://api.github.com/repos/geraldotech/DevMap/contents/Vue/Vue_2/lib


opt1:
custom domain points to
https://git.geraldox.com/Vue/Vue_2/lib/vue-router3_0_2.zip to
https://geraldotech.github.io/DevMap/


opt2:
`https://github.com/gitUser/DevMap/raw/main/${item.path}`;

```
