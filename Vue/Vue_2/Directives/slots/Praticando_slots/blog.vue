<template>
  <div>
    <h1>{{ blogtitle }}</h1>
    <div>
      <img src="https://via.placeholder.com/350x80" alt="" />
    </div>
    <slot></slot>
  </div>
</template>

<script>
module.exports = {
  props: {
    blogtitle: {
      type: String,
      default: "blog title",
    },
  },
  data() {
    return {};
  },
};
</script>