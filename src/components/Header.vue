<template>
  <div class="header bg-slate-800">
    <div class="header__top h-8">
      <div class="container max-w-7xl h-8 m-auto text-white flex items-center">
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
    </div>

    <div class="header__middle">
      <p class="header__middle-text">Front-end developer</p>
      <Splide :options="{ rewind: true, autoplay: true, pagination: false, }" aria-label="My Favorite Images">
        <SplideSlide>HTML5</SplideSlide>
        <SplideSlide>CSS3</SplideSlide>
        <SplideSlide>JAVASCRIPT</SplideSlide>
        <SplideSlide>VUE</SplideSlide>
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

.lastArticleTitle * {
  font-size: inherit;
  display: inherit;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
  display: block;
}

.header__middle {
  text-align: center;
  padding: 20px;
  background-color: #53e3a6;
  background-image: linear-gradient(to bottom right, #50a3a2 0, #53e3a6 100%);
  font-size: 60px;
  color: #5fd1b4;
  font-family: 'Kanit', Helvetica, Arial, sans-serif;
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 0.8;
  text-transform: uppercase;
  text-shadow: 0.045em 0.045em 0.04em rgb(0 0 0 / 21%);
  box-shadow: 0px 20px 20px -10px rgb(0 0 0 / 30%) inset;
  position: relative;
}

.splide {
  text-align: center;
  color: #5fd1b4;
  font-family: 'Kanit', Helvetica, Arial, sans-serif;
  text-shadow: 0.045em 0.045em 0.04em rgb(0 0 0 / 21%);
  font-weight: 400;
  font-size: 30px;
}

.splide__arrows {
  display: none;
}
</style>
