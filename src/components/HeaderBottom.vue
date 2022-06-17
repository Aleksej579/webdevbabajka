<template>
    <div class="header__bottom flex items-center bg-slate-800 z-30">
        <div class="flex items-center m-auto container max-w-7xl">
            <img class="header__logo h-12" src="/src/assets/logo.jpg" alt="WebDev">
            <form class="mx-2.5">
                <select v-model="locale" class="rounded p-2 bg-slate-800 text-white mx-1.5">
                    <option value="en" selected>English</option>
                    <option value="ru">Russian</option>
                </select>
            </form>
            <nav class="header__menu flex justify-between w-full mx-2.5 text-slate-400 font-extrabold">
                <router-link to="/" class="group hover:text-green-400">
                    {{ t('home') }}
                    <span class="bg-gradient-to-r from-pink-500 to-violet-500 block	h-1 w-0 group-hover:w-full"></span>
                </router-link>
                <router-link to="/methodology" class="group hover:text-green-400">
                    {{ t('methodology') }}
                    <span class="bg-gradient-to-r from-pink-500 to-violet-500 block	h-1 w-0 group-hover:w-full"></span>
                </router-link>
                <router-link to="/roadmap" class="group hover:text-green-400">
                    {{ t('roadmap') }}
                    <span class="bg-gradient-to-r from-pink-500 to-violet-500 block	h-1 w-0 group-hover:w-full"></span>
                </router-link>
                <router-link to="/info" class="group hover:text-green-400">
                    {{ t('info') }}
                    <span class="bg-gradient-to-r from-pink-500 to-violet-500 block	h-1 w-0 group-hover:w-full"></span>
                </router-link>
                <router-link to="/html_css" class="group hover:text-green-400">
                    {{ t('html_css') }}
                    <span class="bg-gradient-to-r from-pink-500 to-violet-500 block	h-1 w-0 group-hover:w-full"></span>
                </router-link>
                <router-link to="/programming" class="group hover:text-green-400">
                    {{ t('programming') }}
                    <span class="bg-gradient-to-r from-pink-500 to-violet-500 block	h-1 w-0 group-hover:w-full"></span>
                </router-link>
                <router-link to="/library" class="group hover:text-green-400">
                    {{ t('library') }}
                    <span class="bg-gradient-to-r from-pink-500 to-violet-500 block	h-1 w-0 group-hover:w-full"></span>
                </router-link>
                <router-link to="/cv" class="group hover:text-green-400">
                    {{ t('cv') }}
                    <span class="bg-gradient-to-r from-pink-500 to-violet-500 block	h-1 w-0 group-hover:w-full"></span>
                </router-link>
                <router-link to="/editor" class="group hover:text-green-400">
                    {{ t('editor') }}
                    <span class="bg-gradient-to-r from-pink-500 to-violet-500 block	h-1 w-0 group-hover:w-full"></span>
                </router-link>
            </nav>
        </div>
    </div>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
    setup() {
        const { locale, t } = useI18n({
            useScope: 'global'
        })
        return { locale, t }
    }
};
</script>

<style>
.header__bottom {
    margin-top: 184px;
    position: sticky;
    top: 0;
}

.router-link-active {
    @apply text-green-500;
}
</style>