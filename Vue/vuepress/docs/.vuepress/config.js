module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  markdown: {
    lineNumbers: true // enable lines
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      '/',
      '/foo/',
    ],     
  }
}

