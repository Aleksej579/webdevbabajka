<script setup>
import Header from "./components/Header.vue";
import HeaderBottom from "./components/HeaderBottom.vue";
import Footer from "./components/Footer.vue";

</script>

<template>
  <Header />
  <HeaderBottom />
  <div class="main-container">
    <router-view></router-view>
    <a class="topbutton" href="#" title="Go to top">Наверх</a>
  </div>
  <Footer />
</template>

<style>
.topbutton {
  width: 70px;
  background-color: #2c303b;
  border: 2px solid #48a65b;
  text-align: center;
  padding: 5px;
  position: fixed;
  bottom: 50px;
  right: 50px;
  cursor: pointer;
  color: #48a65b;
  font-family: verdana;
  font-size: 12px;
  border-radius: 5px;
}
</style>
