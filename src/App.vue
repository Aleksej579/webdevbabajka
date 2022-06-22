<script setup>
import HeaderTop from "./components/HeaderTop.vue";
import Header from "./components/Header.vue";
import HeaderBottom from "./components/HeaderBottom.vue";
import Footer from "./components/Footer.vue";

</script>

<template>
  <HeaderTop />
  <Header />
  <HeaderBottom />
  <div class="main-container bg-gray-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 z-10">
    <router-view></router-view>
  </div>
  <a class="text-slate-500  hover:text-slate-400 cursor-pointer fixed bottom-12 right-12 z-30" href="#"
    title="Go to top">
    <i class="fa-solid fa-circle-arrow-up fa-2xl"></i>
  </a>
  <Footer />
</template>