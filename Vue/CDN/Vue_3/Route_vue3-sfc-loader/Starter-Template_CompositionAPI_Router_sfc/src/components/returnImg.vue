<script>

  /* <!-- */
  const config = {
    files: {
      
      // note: Here, for convenience, we simply retrieve content from a string.

      '/theComponent.vue': `
        <script setup>

          const pngData = await import('https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png')
          
          // crate an ObjectURL of our image
          const pngBlobUrl = URL.createObjectURL(new Blob([pngData]));

          // cleanup the ObjectURL, see https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL_static#memory_management
          const onImageLoaded = (ev) => URL.revokeObjectURL(ev.target.src);

        </script>

        <template>
       
          image loaded by vue3-sfc-loader through <pre>fetch()</pre>:
          <img @load="onImageLoaded" :src="pngBlobUrl" />
        </template>

        <style>
          img { width: 128px; vertical-align: middle; }
          pre { display: inline; }
        </style>
      `,
      
      '/main.vue': `
        <script setup>
          import theComponent from '/theComponent.vue'
        </script>
        <template>
          <Suspense>
            <theComponent/>
          </Suspense>
        </template>
      `,
    }
  };

  const options = {
    devMode: true,
    moduleCache: {
      vue: Vue,
    },
    async getFile(url) {
      
      if ( config.files[url] )
        return config.files[url];
      
      const res = await fetch(url);
      if ( !res.ok )
        throw Object.assign(new Error(res.statusText + ' ' + url), { res });
      return {
        getContentData: asBinary => asBinary ? res.arrayBuffer() : res.text(),
      }
    },

    addStyle(textContent) {

      const style = Object.assign(document.createElement('style'), { textContent });
      const ref = document.head.getElementsByTagName('style')[0] || null;
      document.head.insertBefore(style, ref);
    },

    handleModule: async function (type, getContentData, path, options) {

      switch (type) { 
        case '.png':
          return getContentData(true); // load as binary
      } 
    },

    log(type, ...args) {

      console[type](...args);
    }
  }

  const app = Vue.defineAsyncComponent(() => window['vue3-sfc-loader'].loadModule('/main.vue', options))

  console.log(app)
  
  document.querySelector('#root').innerHTML = app.mount(document.body);

</script>
<template>
  
<div id="root"></div>
</template>