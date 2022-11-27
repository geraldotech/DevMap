const app = new Vue({
    el: "#app",
    data: {
       show: false,
    },
    methods: {
        onShowClick(){
            this.show = !this.show;
        }
    }
});