import './assets/main.css'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import { MdToolbar } from 'vue-material/dist/components'

Vue.use(MdToolbar)
createApp(App).mount('#app')
