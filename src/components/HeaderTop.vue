<template>
    <div class="header-top bg-slate-800 z-30">
        <div class="h-7 max-w-7xl">
            <div class="h-7 m-auto text-slate-400 flex items-center justify-between">

                <div>
                    <button @click="showModalTwitter = true">
                        <i class="fa-brands fa-twitter"></i>
                    </button>
                    <button @click="showModalLi = true">
                        <i class="fa-brands fa-linkedin ml-6"></i>
                    </button>
                    <button @click="showModal = true">
                        <i class="fa-brands fa-github ml-6"></i>
                    </button>
                </div>

                <form class="border-l-2 border-slate-400">
                    <select v-model="locale" class="p-1 bg-slate-800 text-slate-400">
                        <option value="en" selected>English</option>
                        <option value="ru">Russian</option>
                    </select>
                </form>
            </div>
        </div>

        <vue-final-modal v-model="showModalTwitter" classes="modal-container"
            content-class="modal-content bg-slate-800 text-slate-400">
            <button class="modal-close" @click="showModalTwitter = false"><i class="fa-solid fa-xmark"></i></button>
            <Popup />
            <div class="flex justify-center">
                <a href="https://twitter.com/Aleksej579">
                    <i class="fa-brands fa-twitter-square fa-5x"></i>
                </a>
            </div>
        </vue-final-modal>

        <vue-final-modal v-model="showModalLi" classes="modal-container"
            content-class="modal-content bg-slate-800 text-slate-400">
            <button class="modal-close" @click="showModalLi = false"><i class="fa-solid fa-xmark"></i></button>
            <Popup />
            <div class="flex justify-center">
                <a href="https://github.com/Aleksej579/webdevbabajka">
                    <i class="fa-brands fa-linkedin fa-5x"></i>
                </a>
            </div>
        </vue-final-modal>

        <vue-final-modal v-model="showModal" classes="modal-container"
            content-class="modal-content bg-slate-800 text-slate-400">
            <button class="modal-close" @click="showModal = false"><i class="fa-solid fa-xmark"></i></button>
            <Popup />
            <div class="flex justify-center">
                <a href="https://github.com/Aleksej579">
                    <i class="fa-brands fa-github fa-5x"></i>
                </a>
            </div>
        </vue-final-modal>
    </div>
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
    }),

    setup() {
        const { locale, t } = useI18n({
            useScope: 'global'
        })
        // const str = store()
        // return { locale, t, str, localeChange: str.localeChange }
        return { locale, t }
    }
};
</script>

<style>
.modal-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    position: relative;
    width: 50%;
    padding: 16px;
    overflow: auto;
    background-color: #fff;
    border-radius: 4px;
}

.modal-close {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    margin: 8px 8px 0 0;
    cursor: pointer;
}

.modal-close::hover {
    color: gray;
}
</style>
