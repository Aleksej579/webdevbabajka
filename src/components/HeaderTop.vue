<template>
    <div
        class="header-top w-full max-w-7xl m-auto absolute right-0 left-0  h-7 z-30  text-teal-400 flex items-center justify-between">
        <div>
            <button class="w-9 hover:bg-slate-500/50" @click="showModalInst = true">
                <i class="fa-brands fa-instagram"></i>
            </button>
            <button class="w-9 hover:bg-slate-500/50" @click="showModalTg = true">
                <i class="fa-brands fa-telegram"></i>
            </button>
            <button class="w-9 hover:bg-slate-500/50" @click="showModalLi = true">
                <i class="fa-brands fa-linkedin"></i>
            </button>
            <button class="w-9 hover:bg-slate-500/50" @click="showModalTwitter = true">
                <i class="fa-brands fa-twitter"></i>
            </button>
            <button class="w-9 hover:bg-slate-500/50" @click="showModal = true">
                <i class="fa-brands fa-github"></i>
            </button>
        </div>

        <div class="flex">
            <button class="w-9 hover:bg-slate-500/50" @click="changeThemMode">
                <span v-if="themMode">
                    <i class="fa-solid fa-moon"></i>
                </span>
                <span v-else>
                    <i class="fa-solid fa-sun"></i>
                </span>
            </button>

            <form>
                <select v-model="locale" class="h-full bg-transparent hover:bg-slate-500/50">
                    <option value="en" selected>English</option>
                    <option value="ru">Russian</option>
                </select>
            </form>
        </div>
    </div>

    <vue-final-modal v-model="showModalInst" classes="modal-container"
        content-class="modal-content bg-gray-100 dark:bg-slate-800 text-slate-400">
        <button class="modal-close" @click="showModalInst = false"><i class="fa-solid fa-xmark"></i></button>
        <Popup />
        <div class="flex justify-center mb-10">
            <a href="https://www.instagram.com/eremenko_579">
                <i class="fa-brands fa-instagram fa-5x"></i>
            </a>
        </div>
    </vue-final-modal>

    <vue-final-modal v-model="showModalTg" classes="modal-container"
        content-class="modal-content bg-gray-100 dark:bg-slate-800 text-slate-400">
        <button class="modal-close" @click="showModalTg = false"><i class="fa-solid fa-xmark"></i></button>
        <Popup />
        <div class="flex justify-center mb-10">
            <a href="https://t.me/Aleksej579">
                <i class="fa-brands fa-telegram fa-5x"></i>
            </a>
        </div>
    </vue-final-modal>

    <vue-final-modal v-model="showModalTwitter" classes="modal-container"
        content-class="modal-content bg-gray-100 dark:bg-slate-800 text-slate-400">
        <button class="modal-close" @click="showModalTwitter = false"><i class="fa-solid fa-xmark"></i></button>
        <Popup />
        <div class="flex justify-center mb-10">
            <a href="https://twitter.com/Aleksej579">
                <i class="fa-brands fa-twitter-square fa-5x"></i>
            </a>
        </div>
    </vue-final-modal>

    <vue-final-modal v-model="showModalLi" classes="modal-container"
        content-class="modal-content bg-gray-100 dark:bg-slate-800 text-slate-400">
        <button class="modal-close" @click="showModalLi = false"><i class="fa-solid fa-xmark"></i></button>
        <Popup />
        <div class="flex justify-center mb-10">
            <a href="https://github.com/Aleksej579/webdevbabajka">
                <i class="fa-brands fa-linkedin fa-5x"></i>
            </a>
        </div>
    </vue-final-modal>

    <vue-final-modal v-model="showModal" classes="modal-container"
        content-class="modal-content bg-gray-100 dark:bg-slate-800 text-slate-400">
        <button class="modal-close" @click="showModal = false"><i class="fa-solid fa-xmark"></i></button>
        <Popup />
        <div class="flex justify-center mb-10">
            <a href="https://github.com/Aleksej579">
                <i class="fa-brands fa-github fa-5x"></i>
            </a>
        </div>
    </vue-final-modal>
</template>

<script>
import VueFinalModal from 'vue-final-modal'
import Popup from './Popup.vue'
import { useI18n } from 'vue-i18n'

const { VueFinalModal: VueFinalModalComponent } = VueFinalModal
// import { store } from "../stores/counter.js";

export default {
    components: {
        Popup,
        VueFinalModal: VueFinalModalComponent,
    },
    data: () => ({
        showModal: false,
        showModalTwitter: false,
        showModalLi: false,
        showModalTg: false,
        showModalInst: false,
        themMode: false,
    }),

    setup() {
        const { locale, t } = useI18n({
            useScope: 'global'
        })
        // const str = store()
        // return { locale, t, str, localeChange: str.localeChange }
        return { locale, t }
    },
    methods: {
        changeThemMode() {
            document.body.classList.toggle('dark');
            this.themMode = !this.themMode
        }
    }
};
</script>

<style>
.modal-container,
.modal-close {
    @apply flex justify-center items-center;
}

.modal-content {
    @apply relative w-1/2 p-4 overflow-auto bg-white rounded;
}

.modal-close {
    @apply absolute top-0 right-0 w-8 h-8 cursor-pointer m-2;
}

.modal-close:hover {
    @apply text-gray-500;
}
</style>
