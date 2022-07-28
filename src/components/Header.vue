<template>
  <div
    class="header-middle text-center px-2 pt-7 pb-5 h-40 text-2xl xsm:text-3xl xsm:h-80 sm:text-4xl font-extrabold uppercase">
    <p class="header-middle-text mx-auto inline"></p>
    <Splide :options="{ rewind: true, autoplay: true, pagination: false, }" aria-label="My Favorite Images"
      class="tracking-widest text-lg sm:text-base md:w-2/4 mx-auto opacity-50">
      <SplideSlide>HTML5 & CSS3</SplideSlide>
      <SplideSlide>BEM & SASS</SplideSlide>
      <SplideSlide>JAVASCRIPT & ES6+</SplideSlide>
      <SplideSlide>VUE & VITE & PINIA</SplideSlide>
    </Splide>
  </div>
</template>

<script>
import Typed from 'typed.js';

export default {
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
.header-middle {
  font-family: 'Signika Negative', sans-serif;
  background-image: linear-gradient(to bottom, #50a3a2 0, #53e3a6 100%);
  text-shadow: 0.045em 0.045em 0.04em rgb(0 0 0 / 21%);
  box-shadow: 0px 20px 20px -10px rgb(0 0 0 / 30%) inset;
  @apply fixed inset-x-0 text-teal-400;
}

.splide {
  text-shadow: 0.045em 0.045em 0.04em rgb(0 0 0 / 21%);
}

.splide__arrows {
  @apply hidden;
}
</style>
