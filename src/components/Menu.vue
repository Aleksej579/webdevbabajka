<template>
    <div class="menu flex items-center m-auto max-w-7xl justify-between dark:bg-slate-800 dark:border-b-slate-700">
        <figure class='flex items-center'>
            <router-link to="/">
                <img class="header__logo h-12 rounded-lg" src="/src/assets/logo.png" alt="WebDev">
            </router-link>
            <figcaption class="ml-5">{{ t('sbbi') }}</figcaption>
        </figure>
        <span @click="openMobileMenu" class="cursor-pointer mr-1 text-slate-400 text-xl sm:hidden">
            <i class="fa-solid fa-bars"></i>
        </span>
        <nav :class="{ mobile_menu: isActive }" @click="closeMobileMenu"
            class="header__menu dark:bg-slate-800 sm:flex sm:text-xs lg:text-base">
            <router-link to="/" class="group hover:text-teal-500 relative">
                {{ t('cv') }}
                <span class="group-hover:p-0.5"></span>
            </router-link>
            <router-link to="/portfolio" class="group hover:text-teal-500 relative">
                {{ t('library') }}
                <span class="group-hover:p-0.5"></span>
            </router-link>
            <router-link to="/programming" class="group hover:text-teal-500 relative">
                {{ t('programming') }}
                <span class="group-hover:p-0.5"></span>
            </router-link>
        </nav>
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
.menu {
    @apply sticky top-0 flex items-center bg-slate-50 border-b z-20;
}

nav {
    font-family: 'Signika Negative', sans-serif;
    @apply hidden justify-between ml-3 text-slate-500 font-extrabold text-center gap-4 bg-slate-50;
}

.mobile_menu {
    @apply  !block p-1 absolute left-0 right-0 top-0 !ml-0;
}

.menu figcaption {
    font-family: 'Fredericka the Great', cursive;
}

.header__menu span {
    @apply bg-gradient-to-r from-pink-500 to-violet-500 block h-0 opacity-50 w-full absolute bottom-0 duration-300 ease-in-out;
}

.router-link-active {
    @apply text-teal-500;
}

.mobile_menu a {
    @apply block;
}
</style>