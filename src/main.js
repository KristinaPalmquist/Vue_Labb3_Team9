import { createApp } from "vue";
import { createPinia } from "pinia";
//import bootstarap
import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.css";

import App from "./App.vue";
import router from "./router";
import axios from 'axios'
import "./assets/base.css";

const app = createApp(App);
app.config.globalProperties.axios = axios

app.use(createPinia());
app.use(router);
app.use(bootstrap);
app.mount("#app");
