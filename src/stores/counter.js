import { defineStore } from 'pinia'

export const store = defineStore({
    id: 'globalStore',
    state: () => ({
        count: 1,
        locale: 'ua-UA'
    }),
    actions: {
        localeChange() {
            return this.locale = 'ru-RU'
        },
    }
})