React.useCallback()

For caching functions

![image](https://github.com/geraldotech/DevMap/assets/92253544/492627bd-39c1-4cdb-8ec8-7639482e855f)

```js
// Before:
function increment() {
  setCount((prevCount) => prevCount + 1)
}

// now, move the setCount.. to useCallback and remove original functions increment

const increment = React.useCallback(() => {
  setCount((prevCount) => prevCount + 1)
}, [])
```

Warning: Vite enforces using jsx syntax inside jsx/tsx files, so it will complain about that. Solution: rename `.js` files to `.jsx` :)

Quick start:

```
$ npm install
$ npm start
```

Head over to https://vitejs.dev/ to learn more about using vite

## About Scrimba

At Scrimba our goal is to create the best possible coding school at the cost of a gym membership! 💜
If we succeed with this, it will give anyone who wants to become a software developer a realistic shot at succeeding, regardless of where they live and the size of their wallets 🎉
The Frontend Developer Career Path aims to teach you everything you need to become a Junior Developer, or you could take a deep-dive with one of our advanced courses 🚀

- [Our courses](https://scrimba.com/allcourses)
- [The Frontend Career Path](https://scrimba.com/learn/frontend)
- [Become a Scrimba Pro member](https://scrimba.com/pricing)

Happy Coding!
