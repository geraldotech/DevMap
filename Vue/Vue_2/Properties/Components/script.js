Vue.component('user-profile', {
    props: {
        name: {
            type: String,
            /* default: 'Geraldo' */
            required: true,
        },
        age: [ Number, String]
    },
    template: '<span> {{name}} - {{age}} </span>'
})


var app = new Vue({
    el: '#app',
    data: {
        name: 'Carlos',
        age: 28
    }
});  