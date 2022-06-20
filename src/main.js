import { createApp } from 'vue'

import App from './App.vue'

import router from './router'

 import vuelidate from 'vuelidate'

import axios from 'axios';

import VueAxios from 'vue-axios';

//import Vue from 'vue';



//Vue.use(VueAxios, axios);




 createApp(App).use(router,VueAxios,axios,vuelidate).mount('#app')



// eslint-disable-next-line no-undef

// app .use(vuelidate)