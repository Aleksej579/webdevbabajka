<template>
  <div class="header bg-slate-800">
    <div class="header__top h-8 max-w-7xl">
      <div class="h-8 m-auto text-slate-400 flex items-center justify-between">

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

    <div class="header__middle text-center p-5 text-6xl font-extrabold uppercase">
      <p class="header__middle-text">Front-end developer</p>
      <Splide :options="{ rewind: true, autoplay: true, pagination: false, }" aria-label="My Favorite Images"
        class="font-bold tracking-widest text-2xl">
        <SplideSlide>HTML-5</SplideSlide>
        <SplideSlide>CSS-3</SplideSlide>
        <SplideSlide>SASS</SplideSlide>
        <SplideSlide>BEM</SplideSlide>
        <SplideSlide>JAVASCRIPT</SplideSlide>
        <SplideSlide>ES6+</SplideSlide>
        <SplideSlide>VUE</SplideSlide>
        <SplideSlide>VITE</SplideSlide>
        <SplideSlide>PINIA</SplideSlide>
      </Splide>
    </div>

    <vue-final-modal v-model="showModalTwitter" classes="modal-container" content-class="modal-content">
      <button class="modal-close" @click="showModalTwitter = false"><i class="fa-solid fa-xmark"></i></button>
      <Popup />
      <div class="flex justify-center">
        <a href="https://twitter.com/Aleksej579">
          <i class="fa-brands fa-twitter-square fa-5x"></i>
        </a>
      </div>
    </vue-final-modal>

    <vue-final-modal v-model="showModalLi" classes="modal-container" content-class="modal-content">
      <button class="modal-close" @click="showModalLi = false"><i class="fa-solid fa-xmark"></i></button>
      <Popup />
      <div class="flex justify-center">
        <a href="https://github.com/Aleksej579/webdevbabajka">
          <i class="fa-brands fa-linkedin fa-5x"></i>
        </a>
      </div>
    </vue-final-modal>

    <vue-final-modal v-model="showModal" classes="modal-container" content-class="modal-content">
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
.header {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1;
}

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

/* .lastArticleTitle * {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
  display: block;
} */

.header__middle {
  background-color: #53e3a6;
  background-image: linear-gradient(to bottom right, #50a3a2 0, #53e3a6 100%);
  color: #5fd1b4;
  text-shadow: 0.045em 0.045em 0.04em rgb(0 0 0 / 21%);
  box-shadow: 0px 20px 20px -10px rgb(0 0 0 / 30%) inset;
}

.splide {
  text-shadow: 0.045em 0.045em 0.04em rgb(0 0 0 / 21%);
}

.splide__arrows {
  display: none;
}
</style>
