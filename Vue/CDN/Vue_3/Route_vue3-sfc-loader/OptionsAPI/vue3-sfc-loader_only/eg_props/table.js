const template = `
    <div>
    <div v-if="workers.length === 0">No workers available.</div>

    <div v-else>
        works on
    </div>
    <a href="https://dev.to/krowemoh/a-vue3-tutorial-08-vue-components-without-a-build-system-2-a-better-way-g1g">ref</a>
    </div>
`

export default {
  props: ['headers', 'workers'],
  data() {
    return {}
  },
  template: template,
}
