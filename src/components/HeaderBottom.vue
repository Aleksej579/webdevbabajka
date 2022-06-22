<template>
    <div
        class="header-bottom sticky top-0 mt-[124px] sm:mt-24 flex items-center bg-slate-300 dark:bg-slate-800 z-20 border-b-4 dark:border-slate-900">
        <div class="flex items-center m-auto container max-w-7xl justify-between p-1.5">
            <img class="header__logo h-12 rounded-lg" src="/src/assets/logo.jpg" alt="WebDev">
            <span @click="openMobileMenu" class="cursor-pointer text-slate-400 text-xl sm:hidden">
                <i class="fa-solid fa-bars"></i>
            </span>
            <nav :class="{ mobile_menu: isActive }" @click="closeMobileMenu"
                class="header__menu hidden sm:flex justify-between ml-3 w-full text-slate-500 font-extrabold sm:text-xs lg:text-base gap-4">
                <router-link to="/" class="group hover:text-sky-500">
                    {{ t('home') }}
                    <span class="bg-gradient-to-r from-pink-500 to-violet-500 block	h-1 w-0 group-hover:w-full"></span>
                </router-link>
                <router-link to="/methodology" class="group hover:text-sky-500">
                    {{ t('methodology') }}
                    <span class="bg-gradient-to-r from-pink-500 to-violet-500 block	h-1 w-0 group-hover:w-full"></span>
                </router-link>
                <router-link to="/roadmap" class="group hover:text-sky-500">
                    {{ t('roadmap') }}
                    <span class="bg-gradient-to-r from-pink-500 to-violet-500 block	h-1 w-0 group-hover:w-full"></span>
                </router-link>
                <router-link to="/info" class="group hover:text-sky-500">
                    {{ t('info') }}
                    <span class="bg-gradient-to-r from-pink-500 to-violet-500 block	h-1 w-0 group-hover:w-full"></span>
                </router-link>
                <router-link to="/html_css" class="group hover:text-sky-500">
                    {{ t('html_css') }}
                    <span class="bg-gradient-to-r from-pink-500 to-violet-500 block	h-1 w-0 group-hover:w-full"></span>
                </router-link>
                <router-link to="/programming" class="group hover:text-sky-500">
                    {{ t('programming') }}
                    <span class="bg-gradient-to-r from-pink-500 to-violet-500 block	h-1 w-0 group-hover:w-full"></span>
                </router-link>
                <router-link to="/library" class="group hover:text-sky-500">
                    {{ t('library') }}
                    <span class="bg-gradient-to-r from-pink-500 to-violet-500 block	h-1 w-0 group-hover:w-full"></span>
                </router-link>
                <router-link to="/cv" class="group hover:text-sky-500">
                    {{ t('cv') }}
                    <span class="bg-gradient-to-r from-pink-500 to-violet-500 block	h-1 w-0 group-hover:w-full"></span>
                </router-link>
                <router-link to="/editor" class="group hover:text-sky-500">
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
    data() {
        return {
            isActive: false,
        }
    },
    setup() {
        const { locale, t } = useI18n({
            useScope: 'global'
        })
        return { locale, t }
    },
    methods: {
        openMobileMenu() {
            this.isActive = true;
        },
        closeMobileMenu() {
            this.isActive = false;
        }
    }
};
</script>

<style>
.router-link-active {
    /* @apply text-green-500; */
    @apply text-sky-500;
}

.mobile_menu {
    display: block !important;
    position: absolute;
    background-color: black;
    top: 0;
    left: 0;
    padding: 5px;
    margin-left: 0 !important;
}
</style>