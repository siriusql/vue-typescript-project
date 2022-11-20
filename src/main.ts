import BootstrapVue3 from 'bootstrap-vue-3';
// import 'bootstrap-vue';
import { createApp } from 'vue';
import App from './app/app.vue';
import './index.scss';
import router from './router';

createApp(App).use(BootstrapVue3).use(router).mount('#app')
