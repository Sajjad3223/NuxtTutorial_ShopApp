export function customFetch<T>(url:string,config:any={}){
  
  const authStore = useAuthStore();
  if(authStore.isLoggedIn){
    config = {
      ...config,
      headers:{
        'Authorization': `Bearer ${authStore.getToken()}`
      }
    }
  }

  return $fetch<T>(url,config);
}