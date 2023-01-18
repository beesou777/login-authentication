import { createApp } from "vue";
import { createPinia } from "pinia";
import 'bootstrap/dist/css/bootstrap.css'
import App from "./App.vue";
import router from "./router";
import './axios'
import "./assets/styles/style.css";
import {Toaster} from "@meforma/vue-toaster";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Toaster);
app.mount("#app");
