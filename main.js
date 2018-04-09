import Vue from 'vue'
import Main from './Main.vue'

const app = new Vue({
   render: h => h(Main),
}).$mount('#app');
