import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import header from "@/components/Header";

const app = createApp(App);
app.component("Header",header);
app.use(router);
app.mount('#app');
