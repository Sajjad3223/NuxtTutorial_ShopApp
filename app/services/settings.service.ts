import type { SettingsDto } from "~/models/settings"

export const GetSettings = ()=>{
    return customFetch<SettingsDto>('/api/settings')
}