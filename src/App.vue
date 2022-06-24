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

  <main class="main mt-[124px] sm:mt-24 bg-gray-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 z-10">
    <HeaderBottom />
    <router-view></router-view>
  </main>

  <a class="text-slate-500  hover:text-slate-400 cursor-pointer fixed bottom-8 right-5 sm:bottom-12 sm:right-12 z-30"
    href="#" title="Go to top"><i class="fa-solid fa-circle-arrow-up fa-2xl"></i>
  </a>

  <Footer />
</template>