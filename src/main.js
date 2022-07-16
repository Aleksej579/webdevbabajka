import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import { vfmPlugin } from 'vue-final-modal';
// import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import translationInterface from './translation/translationInterface.js'
import './index.css'
// import './assets/font.css'

const i18n = createI18n({
    locale: 'en',
    messages: translationInterface,
})

createApp(App)
    .use(VueSplide)
    .use(vfmPlugin)
    // .use(createPinia())
    .use(i18n)
    .use(router)
    .mount('#app')
