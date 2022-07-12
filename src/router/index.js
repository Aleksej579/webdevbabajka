import { createRouter, createWebHistory } from 'vue-router'
import programming from '../views/programming.vue'
import portfolio from '../views/portfolio.vue'
import resume from '../views/resume.vue'
import pnf from '../views/pnf.vue'

const routes = [
    { path: "/", name: "resume", component: resume },
    { path: "/portfolio", name: "portfolio", component: portfolio },
    { path: "/programming", name: "programming", component: programming },
    { path: "/:pathMatch(.*)*", name: "pnf", component: pnf }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router