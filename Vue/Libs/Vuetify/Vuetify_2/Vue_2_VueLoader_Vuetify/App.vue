<template>
  <div>
    <v-app>
      <v-card>
        <v-card-title>
            <h1 class="display-1">{{title}}</h1>
        </v-card-title>
      </v-card>
    <v-bottom-navigation v-model="navegar" color="primary" grow>
        <v-btn value="mobile">
         <span>
           Mobile
         </span>
          <v-icon>mdi-network-strength-4
          </v-icon>
         
        </v-btn>
        <v-btn value="wifi">
           <span>
             Wifi
           </span>
          <v-icon>
            mdi-wifi-star
          </v-icon>
         
        </v-btn>
    </v-bottom-navigation>
    <v-container>
    
       <ul :class="cla.flex">
         <li>Home</li>
         <li>About</li>
         <li>  <input type="checkbox" v-model="isAtivo"></li>
         <li><v-btn :color="isAtivo ? 'primary' : ''">Button</v-btn></li>
         
         <li> 
         <v-btn 
  @click="adici" :color="isBtn ? 'primary' : ''">button 2
         </v-btn></li>
         <li> <h1 :class="{'display-1': isTile}"
         @click="isTile = !isTile"
         >Vuetify class hiden between 'my-class'</h1> </li>
          <li><p @click="isTile2 = !isTile2" :class="{'font-weight-black' : isTile2}" >toggle Vuetify class</p></li>
       </ul>
    </v-container>
    </v-app>
  </div>
</template>
<script>
  module.exports = {
    data(){
      return{
        navegar: '',
        title: 'My App',
        cla:{
          flex: 'd-flex justify-space-between flex-column'
        },
        isAtivo: false,
        isBtn: false,
        isTile: false,
        isTile2: false,
      
      }
    },
    methods:{
      adici(){
        //console.warn(true)
        this.isBtn = !this.isBtn
      },
    },
    watch:{
      navegar(){
        console.log(this.navegar);
      }
    },
  
  }
</script>
<style>
.red {
  font-size: 2rem;
}
</style>