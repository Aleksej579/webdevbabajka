<template>
  <footer
    class="footer mt-auto h-24 z-10 text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 border-t dark:border-t-slate-700 flex items-center">
    <div class="container max-w-7xl flex items-center m-auto">
      <span class="mr-5">
        Show Adaptive Grid
        <i class="fa-solid fa-arrow-right-long"></i>
      </span>
      <button @click="showGrid">
        <i class="fa-solid fa-grip-vertical fa-lg"></i>
      </button>
    </div>
  </footer>
</template>


<script>
import { useI18n } from 'vue-i18n'

export default {
  data() {
    return {
      // isActive: false,
    }
  },
  setup() {
    const { locale, t } = useI18n({
      useScope: 'global'
    })
    return { locale, t }
  },
  methods: {
    showGrid() {
      document.getElementById('app').classList.toggle('gridbg');
    },
  }
};
</script>
