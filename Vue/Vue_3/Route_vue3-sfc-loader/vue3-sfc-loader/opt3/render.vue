<template>
  <div>
    <div v-html="rawHtml"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rawHtml: "<h1> This is some HTML </h1>",
    };
  },
  render() {
    return (
      <div>
        <div domPropsInnerHTML={this.rawHtml}> </div>
      </div>
    );
  },
};
