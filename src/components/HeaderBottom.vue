<template>
    <div class="header__bottom flex items-center m-auto container max-w-7xl">
        <div class="flex items-center m-auto container max-w-7xl">
            <img class="header__logo h-12" src="/src/assets/logo.jpg" alt="WebDev">
            <form class="mx-2.5">
                <select v-model="locale" class="rounded p-2 bg-slate-800 text-white mx-1.5">
                    <option value="en" selected>English</option>
                    <option value="ru">Russian</option>
                </select>
            </form>
            <nav class="header__menu flex justify-between w-full mx-2.5">
                <router-link to="/" class="rounded px-1.5 hover:bg-slate-800 hover:text-white">{{ t('home') }}
                </router-link>
                <router-link to="/methodology" class="rounded px-1.5 hover:bg-slate-800 hover:text-white">
                    {{ t('methodology') }}</router-link>
                <router-link to="/roadmap" class="rounded px-1.5 hover:bg-slate-800 hover:text-white">
                    {{ t('roadmap') }}</router-link>
                <router-link to="/info" class="rounded px-1.5 hover:bg-slate-800 hover:text-white">
                    {{ t('info') }}</router-link>
                <router-link to="/html_css" class="rounded px-1.5 hover:bg-slate-800 hover:text-white">
                    {{ t('html_css') }}</router-link>
                <router-link to="/programming" class="rounded px-1.5 hover:bg-slate-800 hover:text-white">{{
                        t('programming')
                }}</router-link>
                <router-link to="/library" class="rounded px-1.5 hover:bg-slate-800 hover:text-white">{{ t('library') }}
                </router-link>
                <router-link to="/cv" class="rounded px-1.5 hover:bg-slate-800 hover:text-white">{{ t('cv') }}
                </router-link>
                <router-link to="/editor" class="rounded px-1.5 hover:bg-slate-800 hover:text-white">{{ t('editor') }}
                </router-link>
            </nav>

            <nav class="header__menu flex justify-between w-full mx-2.5">
                <router-link to="/" class="rounded px-1.5 hover:bg-slate-800 hover:text-white">home
                </router-link>
                <router-link to="/methodology" class="rounded px-1.5 hover:bg-slate-800 hover:text-white">
                    methodology</router-link>
                <router-link to="/roadmap" class="rounded px-1.5 hover:bg-slate-800 hover:text-white">
                    roadmap</router-link>
                <router-link to="/info" class="rounded px-1.5 hover:bg-slate-800 hover:text-white">
                    info</router-link>
                <router-link to="/html_css" class="rounded px-1.5 hover:bg-slate-800 hover:text-white">
                    html_css</router-link>
                <router-link to="/programming" class="rounded px-1.5 hover:bg-slate-800 hover:text-white">programming
                </router-link>
                <router-link to="/library" class="rounded px-1.5 hover:bg-slate-800 hover:text-white">library
                </router-link>
                <router-link to="/cv" class="rounded px-1.5 hover:bg-slate-800 hover:text-white">cv
                </router-link>
                <router-link to="/editor" class="rounded px-1.5 hover:bg-slate-800 hover:text-white">editor
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
    background-color: #1f1f28;
}

.router-link-active {
    background-color: rgb(30 41 59);
    color: white;
}
</style>