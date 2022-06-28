<template>
  <div
    class="header-middle text-center px-2 pt-7 pb-5 h-40 text-2xl xsm:text-3xl xsm:h-80 sm:text-4xl font-extrabold uppercase">
    <p class="header-middle-text mx-auto inline"></p>
    <Splide :options="{ rewind: true, autoplay: true, pagination: false, }" aria-label="My Favorite Images"
      class="font-bold tracking-widest text-lg sm:text-xl md:w-2/4 mx-auto">
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
</template>

<script>
import { useI18n } from 'vue-i18n'
import Typed from 'typed.js';
// import { store } from "../stores/counter.js";

export default {
  setup() {
    const { locale, t } = useI18n({
      useScope: 'global'
    })
    // const str = store()
    // return { locale, t, str, localeChange: str.localeChange }
    return { locale, t }
  },
  mounted() {
    var options = {
      strings: ['Frontend developer'],
      backSpeed: 50,
      typeSpeed: 250,
      loop: true,
    };
    var typed = new Typed('.header-middle-text', options);
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Signika+Negative:wght@300;400;500;600;700&display=swap');

.header-middle {
  position: fixed;
  left: 0;
  right: 0;
  font-family: 'Signika Negative', sans-serif;
}

.header-middle {
  background-color: #53e3a6;
  background-image: linear-gradient(to bottom, #50a3a2 0, #53e3a6 100%);
  color: #5fd1b4;
  text-shadow: 0.045em 0.045em 0.04em rgb(0 0 0 / 21%);
  box-shadow: 0px 20px 20px -10px rgb(0 0 0 / 30%) inset;
}

.splide {
  text-shadow: 0.045em 0.045em 0.04em rgb(0 0 0 / 21%);
}

.splide__arrows {
  @apply hidden;
}
</style>
