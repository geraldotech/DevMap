const app = new Vue({
    el: "#app",
    data: {
        age: "",
        
    },
    methods:{
        submitForm(e){
            this.age = this.idade;
        }
    }
});

/* alternative
changeAge(vaklue){
    this.age = value;
}
 */