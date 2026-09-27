export default defineNuxtRouteMiddleware((to, from) => {
    if(to.fullPath.startsWith('/profile')){
        const authStore = useAuthStore();
        if(!authStore.isLoggedIn)
            return navigateTo('/')
    }
})
