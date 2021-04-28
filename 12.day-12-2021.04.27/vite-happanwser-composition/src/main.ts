import { createApp } from 'vue'
import App from './App.vue'
import router from "./routes"
import { store, key } from './store'
// 引入静态资源
import "../public/js/rem.js"
createApp(App)
  .use(router)
  .use(store, key)
  .mount('#app')
  
 