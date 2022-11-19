import 'bootstrap';
// import 'bootstrap-vue';
import { createApp } from 'vue';
import App from './app/app.vue';
import './index.scss';
import router from './router';

createApp(App).use(router).mount('#app')
