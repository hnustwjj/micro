import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import register from './register/sub'
register()
createApp(App).use(router).mount('#app')
