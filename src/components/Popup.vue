<template>
  <p class="text-center mb-10">
    {{ t('warning') }} <br>
    <span class="text-sky-400">
      {{ t('suggested_alternatives') }}
    </span>
  </p>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  setup() {
    const { locale, t } = useI18n()
    return { locale, t }
  },
}
</script>