import { createApp } from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import router from './router.js'

//Nick, for realsies, is this the right way to do this, seriously, I'm getting scared.


createApp(App).use(router).mount('#app')
