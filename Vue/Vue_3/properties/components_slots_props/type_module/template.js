const base = `<div id="card">
<div class="card">
  <h2 :class="classe">{{meutitulo}}</h2>
  <p>
    Lorem ipsum dolor sit amet consectetur</p>
    <label>
    <input type="checkbox" id="btn" v-model="ativa">
      {{ativa ? 'ativado' : 'desativado'}}
  </label>
</div>
</div>`;
export default base;
