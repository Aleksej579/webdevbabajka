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
  <div class="main-container bg-slate-900 z-10">
    <router-view></router-view>
    <a class="text-green-500 hover:text-green-400 cursor-pointer fixed bottom-12 right-12" href="#" title="Go to top">
      <i class="fa-solid fa-circle-arrow-up fa-2xl"></i>
    </a>
  </div>
  <Footer />
</template>