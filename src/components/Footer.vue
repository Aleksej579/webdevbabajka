<template>
  <footer
    class="footer mt-auto h-24 z-10 text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 border-t dark:border-t-slate-700 flex items-center">
    <div class="w-full max-w-7xl m-auto p-1.5 flex items-center">
      <button @click="showGrid">
        <i class="fa-solid fa-grip-vertical fa-lg"></i>
      </button>
      <span class="ml-5">
        <i class="fa-solid fa-arrow-left-long"></i>
        Grid
      </span>
    </div>
  </footer>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
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
