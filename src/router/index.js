import { createRouter, createWebHistory } from 'vue-router'
import programming from '../views/programming.vue'
import portfolio from '../views/portfolio.vue'
import resume from '../views/resume.vue'
import methodology from '../views/methodology.vue'
import roadmap from '../views/roadmap.vue'
import pnf from '../views/pnf.vue'

const routes = [
    { path: "/", name: "resume", component: resume },
    { path: "/methodology", name: "methodology", component: methodology },
    { path: "/roadmap", name: "roadmap", component: roadmap },
    { path: "/programming", name: "programming", component: programming },
    { path: "/portfolio", name: "portfolio", component: portfolio },
    { path: "/:pathMatch(.*)*", name: "pnf", component: pnf }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router