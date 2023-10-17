import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { createPinia } from 'pinia'
import VueTheMask from 'vue-the-mask'
import { useVuelidate } from '@vuelidate/core'


const pinia = createPinia()
createApp(App).use(pinia).use(router).use(VueTheMask).use(useVuelidate).mount('#app')
