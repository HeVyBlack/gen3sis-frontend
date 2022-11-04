import { createApp } from "vue";
import { createPinia } from "pinia";

import { createVuestic } from "vuestic-ui";
import "vuestic-ui/css";
import "material-design-icons-iconfont/dist/material-design-icons.min.css";

import App from "./App.vue";
import router from "./router";

// Bootstrap
import "bootstrap/dist/css/bootstrap.css";

// Axios
import "./axios";

// Stores
import { useAuthStore } from "./stores/auth";

// FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App);

app.use(createPinia());

// --> After createPinia(), set const, to use stores <--
const authStore = useAuthStore();

// Fontawesome library
library.add(fas, fab, far);

// First, call autStore's attemp function, with local storage token
authStore.attemp(localStorage.getItem("token")).then(() => {
  // If local storage has an staff token
  if (localStorage.getItem("staff_token")) {
    // Save it in authStore
    authStore.saveStaff(localStorage.getItem("staff_token"));
  }

  // Now, initialize app -->
  app.use(router);
  app.use(createVuestic());
  // Init components
  app.component("font-awesome-icon", FontAwesomeIcon);
  // Mount app in html's #app
  app.mount("#app");
});

// Js Bootstrap
import "bootstrap/dist/js/bootstrap";
