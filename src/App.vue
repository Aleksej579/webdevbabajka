<script setup>
import HeaderTop from "./components/HeaderTop.vue";
import Header from "./components/Header.vue";
import HeaderBottom from "./components/HeaderBottom.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <header>
    <HeaderTop />
    <Header />
  </header>

  <main class="main mt-[95px] bg-gray-100 text-slate-600 z-10 sm:mt-24 dark:bg-slate-900 dark:text-slate-400">
    <HeaderBottom />
    <router-view></router-view>
  </main>

  <a class="go-to-top hover:text-teal-600 sm:bottom-12 sm:right-12 " href="#" title="Go to top">
    <i class="fa-solid fa-circle-arrow-up fa-2xl"></i>
  </a>

  <Footer />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Signika+Negative:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fredericka+the+Great&display=swap');

.go-to-top {
  @apply h-8 w-8 block rounded-full text-teal-500 cursor-pointer fixed bottom-8 right-5 z-30;
  animation: pulse 2000ms infinite;
}

@keyframes pulse {
  0% {
    box-shadow: #59baa6 0 0 0 0;
  }

  75% {
    box-shadow: #59baa600 0 0 0 16px;
  }
}

i {
  line-height: normal !important;
}
</style>