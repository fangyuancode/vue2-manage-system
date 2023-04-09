import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/login',
            component: () => import("@/views/Login.vue"),
            name:'login',
        },
        {
            path: '/',
            name:"Main",
            component: () => import("@/views/Main.vue"),
            redirect: '/home',
            children: [
                {
                    name: 'home',
                    path: "home",
                    component: () => import("@/views/Home.vue"),
                },
                {
                    name: 'user',
                    path: "user",
                    component: () => import("@/views/User.vue"),
                },
                {
                    name: 'mall',
                    path: "mall",
                    component: () => import("@/views/Mall.vue"),
                },
                {
                    name: 'page1',
                    path: "page1",
                    component: () => import("@/views/PageOne.vue"),
                },
                {
                    name: 'page2',
                    path: "page2",
                    component: () => import("@/views/PageTwo.vue"),
                }
            ]
        },

    ]
})

export default router