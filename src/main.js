import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";

createApp(App).mount("#app");
app.config.errorHandler = (err) => {
  console.log(err);
};
