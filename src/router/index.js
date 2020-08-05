import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Buyers from '../views/Buyers.vue'
import Buyer from '../views/Buyer.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/buyers',
        name: 'Buyers',
        component: Buyers
    },
    {
        path: '/buyer',
        name: 'Buyer',
        component: Buyer
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
