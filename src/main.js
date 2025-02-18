import { createApp } from "vue";
import "./style.css";
import "primeicons/primeicons.css";
import Parse from "parse/dist/parse.min.js";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Parse.initialize("resumeup");
Parse.serverURL = "http://localhost:2020/parse";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
