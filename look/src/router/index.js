import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import bookshelf from './../pages/bookshelf.vue'
import bookstore from './../pages/bookstore.vue'
import classification from './../pages/classification.vue'
import lists from './../pages/lists.vue'
const routes = [
    { path: '/bookshelf', component: bookshelf },
    { path: '/bookstore', component: bookstore },
    { path: '/classification', component: classification },
    { path: '/lists', component: lists },
    { path: '/', component: bookstore },
]

const router = new VueRouter({
    routes
})

export default router
