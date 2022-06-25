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

  <main class="main sm:mt-24 dark:bg-slate-900 dark:text-slate-400">
    <HeaderBottom />
    <router-view></router-view>
  </main>

  <a class="go-to-top hover:text-slate-400 sm:bottom-12 sm:right-12 " href="#" title="Go to top">
    <i class="fa-solid fa-circle-arrow-up fa-2xl"></i>
  </a>

  <Footer />
</template>

<style>
main {
  @apply mt-[95px] bg-gray-100 text-slate-600 z-10;
}

.go-to-top {
  @apply text-slate-500 cursor-pointer fixed bottom-8 right-5 z-30;
}
</style>