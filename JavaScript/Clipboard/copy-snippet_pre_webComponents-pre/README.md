# snippet-x component

### CDN

` <script src="../src/webcomponent.js" defer></script>`

### Basic Usage:

- inline

```html
<snippet-x name="?" pink>
  <pre blue> yout code here</pre>
</snippet-x>
```

- block

```html
<snippet-x name="src/components/Modal.vue" blue>
  <pre block red>
    <script>
         export default {
           name: 'Modal',
           methods: {
            close() {
             this.$emit('close');
             },
           },
         };
    </script>

  </pre>
</snippet-x>
```

- Header name + color optional
  `<snippet-x name="src/components/Modal.vue" blue> </snippet>`

- strong / bold
  ` <snippet-x name="Footer.vue">
  <pre>
  npx @vue/cli create <b>--default vue-modal-component-example</b>
  </pre>
      </snippet-x>`
- custom inline color `<pre coral> $ npx @vue/cli create <b>--default </b> vue-modal-component-example</pre>`

- You can some color [here](https://design.volvocars.com/colour/brand-colours/) ou [here](https://git.geraldox.com/CSS/pages/Web-colors.html)
