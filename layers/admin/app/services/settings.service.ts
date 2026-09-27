

export const EditSetting = (command:any)=>{
    return customFetch(`/api/admin/settings`,{
        method:'PUT',
        body:command,
    })
}

export const GetSettingsByAdmin = ()=>{
    return customFetch('/api/admin/settings')
}