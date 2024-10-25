//import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.esm.browser.js'

const vm = new Vue({
  el: '#app',
  data() {
    return {
      item: '',
      offline: [
        { name: 'Audacity', link: 'https://www.fosshub.com/Audacity.html' },
        {
          name: 'Google Chrome x86',
          link: 'https://www.google.com/chrome/?system=true&standalone=1',
        },
        {
          name: 'Google Chrome x64',
          link: 'https://www.google.com/chrome/eula.html?system=true&standalone=1&platform=win64',
        },
        {
          name: 'Mozilla Firefox FTP',
          link: 'https://archive.mozilla.org/pub/firefox/releases/',
        },
      ],
    }
  },
  computed: {
    API() {
      return [
        { id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit' },
        { id: 2, title: 'qui est esse' },
        { id: 3, title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut' },
        { id: 4, title: 'eum et est occaecati' },
        { id: 5, title: 'nesciunt quas odio' },
        { id: 6, title: 'dolorem eum magni eos aperiam quia' },
        { id: 7, title: 'magnam facilis autem' },
        { id: 8, title: 'dolorem dolore est ipsam' },
        { id: 9, title: 'nesciunt iure omnis dolorem tempora et accusantium' },
        { id: 10, title: 'optio molestias id quia eum' },
      ]
    },
  },
})
