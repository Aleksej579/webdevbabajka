<template>
    <div class="header-bottom sticky top-0 mt-[124px] flex items-center bg-slate-800 z-20 border-b-4 border-slate-900">
        <div class="flex items-center m-auto container max-w-7xl justify-between">
            <img class="header__logo h-12" src="/src/assets/logo.jpg" alt="WebDev">
            <nav class="header__menu flex justify-between w-3/4 mx-2.5 text-slate-400 font-extrabold">
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
.router-link-active {
    @apply text-green-500;
}
</style>