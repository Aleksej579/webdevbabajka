<template>
  <header>
    <HeaderTop />
    <Header />
  </header>
  <main class="main mt-[95px] bg-gray-100 text-slate-600 z-10 sm:mt-24 dark:bg-slate-900 dark:text-slate-400">
    <Menu />
    <div class="max-w-7xl mx-auto px-3 min-h-screen">
      <router-view></router-view>
    </div>
  </main>
  <Gototop />
  <Footer />
</template>

<script setup>
import HeaderTop from "./components/HeaderTop.vue";
import Header from "./components/Header.vue";
import Menu from "./components/Menu.vue";
import Gototop from "./components/Gototop.vue";
import Footer from "./components/Footer.vue";
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Signika+Negative:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fredericka+the+Great&display=swap');

i {
  line-height: normal !important;
}
</style>