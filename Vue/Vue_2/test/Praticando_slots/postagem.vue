<template>
  <div>
    <p>App.vue</p>
    <router-link to="/">Home Page</router-link>
    <router-link to="/youtube">Youtube</router-link>
    <router-link to="/google">Google</router-link>
    <button @click="opt = !opt">Show</button>
    <p v-if="opt">
      <Blog blogtitle="Nova postagem">
      <Blog />
    </p>
    <router-view></router-view>
  </div>
</template>


<script>
//String template:

const card = `
      <div>
        <template id="card">
            <div class="card">
              <div><img src="https://via.placeholder.com/350x130" alt="" /></div>
              <div class="card-block">
                <slot></slot>
              </div>
            </div>
          </template>
      </div>
      `;

const temp = `
    <card>
      <h3 class="card-title">Card for Youtube</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <a href="#">Click and Go</a>
    </card>
    `;

const blogPost = httpVueLoader("./blog.vue");

Vue.component("card", {
  template: card,
  props: {
    title: {
      type: String,
    },
  },
});

const Home = { template: `<p>Home Page</p>` };
const youtube = {
  template: temp,
};

//mapping the path
const routes = [
  { path: "/", component: Home },
  { path: "/youtube", component: youtube },
  { path: "/google", component: blogPost, props: true },
];

const router = new VueRouter({
  routes, // short for `routes: routes`
});
module.exports = {
  data() {
    return {
      opt: false,
    };
  },
  methods: {
    open() {
      console.log("log");
    },
  },
  router,
  components: {
    Download: httpVueLoader("./download.vue"),
    Blog: httpVueLoader("./blog.vue"),
  },
};
</script>

<style>
</style>