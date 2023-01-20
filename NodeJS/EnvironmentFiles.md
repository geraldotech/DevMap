## How to Use Environment Files (.env) in Node.js

Install:

```js
npm i dotend
```

```js
//create file
touch.env;

//eg in .env
WEATHER_API = 542;

//in index.js

require("dotenv").config();

console.log(process.env.WEATHER_API);
```

[Reference](https://www.youtube.com/watch?v=hZUNMYU4Kzo&list=PL_VP_qub8HfIva3X7o4FbRqoqg9K-s8z4&index=1)
