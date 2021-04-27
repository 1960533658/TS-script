import { createApp } from 'vue'
import App from './App.vue'
import router from "./routes"
// 引入静态资源
import "../public/js/rem.js"
createApp(App)
  .use(router)
  .mount('#app')
