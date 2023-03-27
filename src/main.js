import { createApp } from 'vue'
import App from './App.vue'
import Vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import VueScrollTo from 'vue-scrollto';

loadFonts()

createApp(App)
  .use(Vuetify)
  .use(VueScrollTo)
  .mount('#app')