import Vue from 'vue';

let vm = new Vue({
    el: '#app',
    data: {
        title: 'vue jsx',
    },
    render(h) {
        return <span>hello</span>;
    },
});
