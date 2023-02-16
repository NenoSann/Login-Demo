import { createApp } from "vue";
import App from "./App.vue";
import './assets/main.scss';

createApp(App).mount("#app");
app.config.errorHandler = (err) => {
  console.log(err);
};
