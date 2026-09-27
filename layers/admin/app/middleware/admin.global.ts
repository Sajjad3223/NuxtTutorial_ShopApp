import type { User } from "~/models/user";

export default defineNuxtRouteMiddleware( async (to, from) => {
    
    if(to.fullPath.startsWith('/admin')){
        const cookie = useCookie('auth_token');
        if(!cookie.value)
            return navigateTo('/')

        const user = await customFetch<User>('/api/user');
        if(user.roles.includes('admin') === false)
            return navigateTo('/')
    }
})
