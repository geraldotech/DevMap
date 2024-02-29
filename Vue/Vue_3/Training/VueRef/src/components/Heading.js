export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    extra: {
      type: String,
      default: null,
    },
  },
  template: `
<div class="list-heading">
    <h4>{{title}}</h4>
    <div v-if="extra">{{extra}}</div>
</div>
`
}