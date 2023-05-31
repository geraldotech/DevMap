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
      <nav>
        <a
          v-for="(links, index) in posts"
          :key="links.name"
          :href="index"
          @click.prevent="RenderPost($event)"
          >{{ links.name }}</a
        >
      </nav>
    </div>

    <hr />
    <h3>{{ post.id }}</h3>
    <h3>{{ post.name }}</h3>
    <h3>{{ post.description }}</h3>
  </div>
</template>

<script>
module.exports = {
  created() {
    this.fetchblog();
    console.log(this.posts);
  },
  data() {
    return {
      posts: {},
      post: {},
      currentIndex: [],
    };
  },
  methods: {
    fetchblog() {
      fetch("./api/posts.json")
        .then((r) => r.json())
        .then((r) => {
          console.log(r[0]);
          this.posts = r;
        });
    },
    RenderPost: function (e) {
      //get current index of selected button
      this.currentIndex = e.target.getAttribute("href");
      //post recebe all posts[index]
      this.post = this.posts[this.currentIndex];
    },
  },
};
</script>

<style>
nav {
  display: flex;
  width: 350px;
  max-width: 400px;
  justify-content: space-around;
  margin: 0 auto;
}
</style>