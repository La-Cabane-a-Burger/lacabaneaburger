import {defineNuxtPlugin, NuxtApp} from "#app";

export default defineNuxtPlugin((nuxt: NuxtApp) => {
    const isLoggedIn = (): boolean => {
        let loggedIn = false;
        if (typeof localStorage !== 'undefined') {
            loggedIn = localStorage.getItem('auth-token') !== null;
        }
        return loggedIn;
    };

    const router = useRouter();

    router.beforeEach((to, from) => {
        // instead of having to check every route record with

        const protectedRoutes = ['account']

        const path = to.fullPath.split('/');

        // to.matched.some(record => record.meta.requiresAuth)
        if (protectedRoutes.includes(path[1]) && !isLoggedIn()) {
            // this route requires auth, check if logged in
            // if not, redirect to login page.
            return {
                path: '/auth/login',
                // save the location we were at to come back later
                // query: { redirect: to.fullPath },
            }
        }
    })
})
