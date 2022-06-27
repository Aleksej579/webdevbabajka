import { createRouter, createWebHistory } from 'vue-router'
import editor from '../views/editor.vue'
import programming from '../views/programming.vue'
import library from '../views/library.vue'
import cv from '../views/cv.vue'
import methodology from '../views/methodology.vue'
import roadmap from '../views/roadmap.vue'

const routes = [
    { path: "/", name: "cv", component: cv },
    { path: "/methodology", name: "methodology", component: methodology },
    { path: "/roadmap", name: "roadmap", component: roadmap },
    { path: "/programming", name: "programming", component: programming },
    { path: "/library", name: "library", component: library },
    { path: "/editor", name: "editor", component: editor }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router