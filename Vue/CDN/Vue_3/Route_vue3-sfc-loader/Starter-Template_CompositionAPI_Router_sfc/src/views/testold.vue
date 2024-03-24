    <template>
      <div>
        <h1>Testes Old</h1>
        <MyComponentX />
        <cardcat/>
      </div>
    </template>
<script>
// humm woking but waning on console
import cardcat from '../components/cardcat.vue';
module.exports = {
  data() {
    return {}
  },
  components: {
    MyComponentX: Vue.defineAsyncComponent(() => loadModule('../src/components/MyComponentX.vue', options)),
  },
}
</script>

