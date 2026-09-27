import { defineStore } from 'pinia'
import { GetCurrentUser } from '~/services/user.service';

export const useUserStore = defineStore('user',()=>{

  const userData = ref(null);

  const refreshUserData = async ()=>{
    const result = await GetCurrentUser();
    if(result)
      userData.value = result;
  }

  return {
    userData,
    refreshUserData
  }

})
