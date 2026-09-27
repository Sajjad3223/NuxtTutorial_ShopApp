import { defineStore } from 'pinia'
import type { SettingsDto } from '~/models/settings'
import { GetSettings } from '~/services/settings.service';

export const useSettingsStore = defineStore('settings',()=>{

  const settings:Ref<SettingsDto> = ref();

  const initSettings = async ()=>{
    const result = await GetSettings();
    settings.value = result;
  }

  return{
    settings,
    initSettings
  }
})
