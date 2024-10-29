<script>
export default {
  name: 'mysupercomponent'
}
</script>
<template>
  <div>
    <article>
      <header>
        <h1>
          <slot name="header"></slot>
        </h1>
      </header>
      <section>
        <slot name="body"></slot>
      </section>
    </article>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<style scoped>
  section {
    color: rgb(141, 48, 177);
  }
</style>