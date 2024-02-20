<template>
  <div>
    <h1>Posts Links</h1>
  </div>
</template>

<script>
export default {
  name: 'BlogPosts',
  created() {
    this.GetPosts()
  },
  methods: {
    GetPosts() {
      fetch('./src/db/data.json')
        .then((req) => req.json())
        .then((res) => {
          console.log(res)
        })
    },
  },
}
</script>

<style></style>
