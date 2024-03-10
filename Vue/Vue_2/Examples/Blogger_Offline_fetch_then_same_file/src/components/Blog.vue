<template>
  <div>
    <h2>Blog Posts</h2>

    <!--   <select v-model="selecionado">
      <option value=""></option>
      <option v-for="posx in posts" :key="posx.id" :value="posx.description">
        {{ posx.name }}
      </option>
    </select>
     -->

    <hr />
    <div class="menu">
      <h1>RenderPostbyIndex()</h1>
      <p>
        não é o jeito mais indicado, pq primeiro é feito um fetch de todos os
        posts e depois no click get os posts by index local[comecando 0] que
        está no href, passe o mouse sobre os links
      </p>
      <nav>
        <a
          v-for="(links, index) in posts"
          :key="links.name"
          :href="index"
          @click.prevent="RenderPostbyIndex($event)"
          >{{ links.name }}
        </a>
      </nav>
    </div>

    <hr />
    <h3>{{ singlepost.id }}</h3>
    <h3>{{ singlepost.name }}</h3>
    <h3>{{ singlepost.description }}</h3>

    <hr />
    <h1>RenderPostbySlug()</h1>
    <div class="menu">
      <nav>
        <a
          v-for="single in posts"
          :key="single.name"
          :href="single.slug"
          @click.prevent="RenderPostbySlug($event)"
          >{{ single.name }}
        </a>
      </nav>
    </div>
    <p>{{ slugPost.id }}</p>
    <p>{{ slugPost.name }}</p>
    <p>{{ slugPost.slug }}</p>
    <p>{{ slugPost.description }}</p>
  </div>
</template>

<script>
module.exports = {
  created() {
    this.fetchblog()
  },
  data() {
    return {
      posts: {},
      singlepost: {},
      slugPost: {},
      currentIndex: [],
    }
  },
  methods: {
    fetchblog() {
      fetch('./api/posts.json')
        .then((r) => r.json())
        .then((r) => {
          this.posts = r
          console.log(this.posts)
        })
    },
    RenderPostbyIndex: function (e) {
      //console.log(e.target.getAttribute("href"));

      //get current index of selected button
      const currentIndex = e.target.getAttribute('href')

      //post recebe all posts[index]
      this.singlepost = this.posts[currentIndex]
    },
    RenderPostbySlug: function (e) {
      //console.log(e.target.getAttribute("href"));

      //get current index of selected button
      const currenthrefVal = e.target.getAttribute('href')

      // find the post
      const find = this.posts.find((v) => v.slug == currenthrefVal)

      find ? (this.slugPost = find) : (this.slugPost = 'vazio')
    },
  },
}
</script>

<style>
nav {
  display: flex;
  max-width: 550px;
  justify-content: space-evenly;
  margin: 0 auto;
}
nav a {
  font-size: 20px;
}
</style>
