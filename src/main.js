import { createApp } from "vue";
import { VueFire, VueFireAuth } from "vuefire";
import { firebaseApp } from "./configs/firebase";
import "./style.css";
import router from "@/router/index.js";
import App from "./App.vue";
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import '@mdi/font/css/materialdesignicons.css'

const app = createApp(App);
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "dark",
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});

app.use(router)
app.use(vuetify)
app.use(VueFire, {
  firebaseApp,
  modules: [
    VueFireAuth()
  ],
});

app.mount("#app");
