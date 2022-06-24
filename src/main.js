import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/index.js'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import { vfmPlugin } from 'vue-final-modal';
// import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import translationInterface from './translation/translationInterface.js'

const i18n = createI18n({
    locale: 'en',
    messages: translationInterface,
})

// createApp(App).use(router).use(VueSplide).use(vfmPlugin).use(createPinia()).use(i18n).mount('#app')
createApp(App)
    .use(VueSplide)
    .use(vfmPlugin)
    .use(i18n)
    .use(router)
    .mount('#app')
