import {createWebHistory, createRouter} from "vue-router";
import Home from "../pages/index.vue";
import Burgers from '../pages/burgers.vue'

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        children: [
            {
                path: 'burgers',
                component: Burgers,
            }]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
