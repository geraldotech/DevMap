<template>
  <div>
    <input type="radio" name="tech" value="java" id="java" v-model="tech">
    <label for="java">Java</label>
    <input type="radio" name="tech" value="nodeee" id="node" v-model="tech">
    <label for="node">node</label>

      <p v-show="tec">{{res}}</p>
      
    
  </div>  
</template>
<script>
export default {
  name: "Info",
 data(){
    return {
      esta_trabalhando: true,
      checked: false,
      tech:[],
      res: '',
    } 
  },
  methods:{
    infos(){
      this.res = this.tech;
    }
  },
  computed:{
    //computado works
    tec(){
      return this.res = this.tech;
    }
  },
};
</script>
