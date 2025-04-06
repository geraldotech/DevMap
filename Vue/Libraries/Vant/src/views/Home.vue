<template>
  <div>
    <h1>Home Page</h1>
    <van-button type="primary">Primary Button</van-button>
    <van-button>Button</van-button>

    <van-dropdown-menu>
      <van-dropdown-item
        v-model="value1"
        :options="option1" />
    </van-dropdown-menu>
    <p>{{ value1 }}</p>
    <van-icon name="chat-o"></van-icon>

    <section>
      <h1>Examples</h1>

      <h1>Icons</h1>
      <van-loading type="spinner"></van-loading>
      <van-icon name="star-o" />

      <h1>buttons</h1>
      <van-button type="warning">Warning</van-button>

      <van-button
        type="primary"
        url="https://github.com"
        >URL</van-button
      >

      <p>
        <van-checkbox v-model="checked">Checkbox to disabled nameField {{ checked && 'Checked' }}</van-checkbox>
      </p>
      <van-field label="Name" placeholder="your name" :disabled="checked" />

      <van-card
  num="2"
  price="2.00"
  title="Title"
  desc="Description"
  thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"></van-card>


    </section>
  </div>
</template>
<script>
module.exports = {
  created() {
    this.GetPosts()
    this.$toast('Some messages');
  },
  data() {
    return {
      posts: {},
      single: {},
      option1: [
        { text: 'Option1', value: 0 },
        { text: 'Option2', value: 1 },
        { text: 'Option3', value: 2 },
      ],
      value1: [],
      checked: false,
      activeNames: ['1']
    }
  },
  methods: {
    GetPosts() {
      fetch('./src/db/data.json')
        .then((req) => req.json())
        .then((res) => {
          this.posts = res.posts
        })
    },
    SinglePost(e) {
      const currentslug = e.target.getAttribute('href')
      this.single = this.posts.find((pos) => pos.slug == currentslug)
    },
  },
  watch:{
    activeNames(){
      console.log(this.activeNames)
    }
  }
}
</script>

<style scoped></style>
