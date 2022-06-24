<template>
    <div
        class="header-bottom sticky top-0 flex items-center bg-slate-50 dark:bg-slate-800 border-b dark:border-b-slate-700 z-20 ">
        <div class="flex items-center m-auto container max-w-7xl justify-between p-1.5">
            <figure class='flex items-center'>
                <img class="header__logo h-12 rounded-lg" src="/src/assets/logo.jpg" alt="WebDev">
                <figcaption class="ml-5 italic">Small busines BIG Impact</figcaption>
            </figure>
            <span @click="openMobileMenu" class="cursor-pointer text-slate-400 text-xl sm:hidden">
                <i class="fa-solid fa-bars"></i>
            </span>
            <nav :class="{ mobile_menu: isActive }" @click="closeMobileMenu"
                class="header__menu hidden sm:flex justify-between ml-3 w-full text-slate-500 font-extrabold sm:text-xs lg:text-base gap-4 sm:w-3/5">
                <router-link to="/" class="group hover:text-teal-500 relative">
                    {{ t('home') }}
                    <span class="group-hover:p-1"></span>
                </router-link>
                <router-link to="/cv" class="group hover:text-teal-500 relative">
                    {{ t('cv') }}
                    <span class="group-hover:p-1"></span>
                </router-link>
                <router-link to="/methodology" class="group hover:text-teal-500 relative">
                    {{ t('methodology') }}
                    <span class="group-hover:p-1"></span>
                </router-link>
                <router-link to="/roadmap" class="group hover:text-teal-500 relative">
                    {{ t('roadmap') }}
                    <span class="group-hover:p-1"></span>
                </router-link>
                <router-link to="/programming" class="group hover:text-teal-500 relative">
                    {{ t('programming') }}
                    <span class="group-hover:p-1"></span>
                </router-link>
                <router-link to="/library" class="group hover:text-teal-500 relative">
                    {{ t('library') }}
                    <span class="group-hover:p-1"></span>
                </router-link>
                <router-link to="/editor" class="group hover:text-teal-500 relative">
                    {{ t('editor') }}
                    <span class="group-hover:p-1"></span>
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
.header__menu span {
    @apply bg-gradient-to-r from-pink-500 to-violet-500 block h-0 opacity-50 w-full absolute bottom-0 duration-300 ease-in-out;
}

.router-link-active {
    @apply text-teal-500;
}

.mobile_menu {
    display: block !important;
    position: absolute;
    background-color: white;
    top: 0;
    left: 0;
    padding: 5px;
    margin-left: 0 !important;
}

.mobile_menu a {
    display: block;
}
</style>