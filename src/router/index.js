import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import editor from '../views/editor.vue'
import programming from '../views/programming.vue'
import library from '../views/library.vue'
import cv from '../views/cv.vue'
import methodology from '../views/methodology.vue'
import roadmap from '../views/roadmap.vue'
import info from '../views/info.vue'
import html_css from '../views/html_css.vue'

const routes = [
    { path: "/", name: "home", component: home },
    { path: "/methodology", name: "methodology", component: methodology },
    { path: "/roadmap", name: "roadmap", component: roadmap },
    { path: "/info", name: "info", component: info },
    { path: "/html_css", name: "html_css", component: html_css },
    { path: "/programming", name: "programming", component: programming },
    { path: "/library", name: "library", component: library },
    { path: "/cv", name: "cv", component: cv },
    { path: "/editor", name: "editor", component: editor }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router