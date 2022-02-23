import {createWebHistory, createRouter} from "vue-router";
import Home from "../pages/index.vue";
import Items from "../pages/items.vue";
import Ingredients from "../pages/ingredients.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/items",
        name: "Items",
        component: Items
    },
    {
        path: "/ingredients",
        name: "Ingredients",
        component: Ingredients
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
