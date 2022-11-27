const app = new Vue({
    el: "#app",
    data: {
     name:"",
     completeName: '',
    },
    methods: {
        fillCompleteName(){
            this.completeName = this.name + " Petronilo";
        }
    },
    watch:{
name(){
    console.log('mudou');
    this.fillCompleteName();
}   
    }

});