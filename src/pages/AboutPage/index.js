import {createApp} from "vue";

import router from "@/router";
import App from "./index.vue";

createApp(App).use(router).mount('#about')
