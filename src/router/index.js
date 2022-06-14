import { createRouter, createWebHistory } from 'vue-router'
import main from '../views/main.vue'
import viewer from '../views/viewer.vue'
import editor from '../views/editor.vue'
import programming from '../views/programming.vue'
import library from '../views/library.vue'
import cv from '../views/cv.vue'
import plan from '../views/plan.vue'
import tools from '../views/tools.vue'
import info from '../views/info.vue'
import html from '../views/html.vue'
import css from '../views/css.vue'

const routes = [
    { path: "/", name: "main", component: main },
    { path: "/plan", name: "plan", component: plan },
    { path: "/tools", name: "tools", component: tools },
    { path: "/info", name: "info", component: info },
    { path: "/html", name: "html", component: html },
    { path: "/css", name: "css", component: css },
    { path: "/programming", name: "programming", component: programming },
    { path: "/library", name: "library", component: library },
    { path: "/cv", name: "cv", component: cv },
    { path: "/viewer", name: "viewer", component: viewer },
    { path: "/editor", name: "editor", component: editor }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router