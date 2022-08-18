import {createApp} from 'vue'
import App from './index.vue'
import router from '@/router/index';
import '@/assets/reset.less';

createApp(App)
    .use(router)
    .mount('#home');
