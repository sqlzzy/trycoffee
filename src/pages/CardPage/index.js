import {createApp} from 'vue'
import App from './index.vue'
import '@/assets/reset.less';
import router from '@/router/index';

createApp(App)
    .use(router)
    .mount('#card-page')
