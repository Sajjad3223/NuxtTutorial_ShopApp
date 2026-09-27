import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth',()=>{

  const setToken = (token:string)=>{
    const cookie = useCookie('auth_token')
    cookie.value = token;
  }

  const getToken = ()=>{
    const cookie = useCookie('auth_token')
    return cookie.value;
  }

  const deleteToken = ()=>{
    const cookie = useCookie('auth_token')
    cookie.value = null;
  }

  const isLoggedIn = computed(()=>{
    const cookie = useCookie('auth_token')
    return cookie.value != null;
  })

  return {
    setToken,
    getToken,
    deleteToken,
    isLoggedIn
  }
})
