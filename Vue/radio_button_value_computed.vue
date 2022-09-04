<template>
  <div>
    <input type="radio" name="tech" value="java" id="java" v-model="tech">
    <label for="java">Java</label>
    <input type="radio" name="tech" value="node" id="node" v-model="tech">
    <label for="node">node</label>
      <input type="radio" name="tech" value="html" id="html" v-model="tech">
    <label for="html">html</label>

<p>{{tech}}</p>
<p v-if="isNode">Download Node</p>
<p v-show="isJava">Downloads Java</p>
<p v-show="isHTML">Downloads HTML</p>
    
  </div>
</template>
<script>
export default {
  name: "Info",
  data(){
    return {  
      tech:[], //não precisa ser Array
      res: '',
      other: ''
    } 
  },
  methods:{
   
  },
  computed:{
 
    isNode(){
      return this.tech == 'node'
    },
    isJava(){
      return this.tech == 'java'
    },
     isHTML(){
      return this.tech == 'html'
    }
  },  
};
</script>
