<template>
  <p class="text-center">
    {{ t('warning') }} <br>
    <span class="text-orange-600">{{ t('suggested_alternatives') }}</span><br>
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