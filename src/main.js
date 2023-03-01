import { createApp } from "vue";
import { createPinia } from "pinia";
import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import moment from "moment/min/moment-with-locales";
import "./assets/base.css";
const app = createApp(App);
app.config.globalProperties.axios = axios;

app.use(createPinia());
app.use(router);
app.use(bootstrap);
app.use(moment);
app.mount("#app");
