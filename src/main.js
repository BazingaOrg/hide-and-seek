import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.less'

import './styles/reset.css'
import './styles/tailwind.css'
import App from './App.vue'
import router from './router/index'

const app = createApp(App)
app.use(ArcoVue).use(router).mount('#app')
