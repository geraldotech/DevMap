<template>
  <div>
    <p>{{ txt }}</p>
    <select name="" v-model="opt">
      <option value="">Selecionar</option>
      <option v-for="item in articles" :key="item.id" :value="item.article">
        {{ item.slug }}
      </option>
    </select>
    <p>{{ opt }}</p>
    <a v-for="items in articles" :key="items.slug" :href="items.slug">{{
      items.title
    }}</a>
  </div>
</template>

<style scoped>
</style>
 
<script>
module.exports = {
  created() {
    this.posts();
    this.blog();
  },
  data: function () {
    return {
      txt: `Render posts`,
      articles: "",
      bslug: "",
      opt: "",
    };
  },
  methods: {
    async posts() {
      const req = await fetch("./src/components/data.json");
      const data = await req.json();
      console.log(data);
      this.articles = data.blog.posts;
    },
    async blog() {
      const req = fetch("./src/components/data.json").then((res) =>
        res.json().then((resf) => console.log(resf))
      );
    },
  },
};
</script>
<style scoped>
a {
  display: block;
}
</style>

