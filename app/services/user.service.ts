import type { User } from "~/models/user"

export const EditUser = (name:string)=>{
    return customFetch('/api/user/edit',{
        method:'PUT',
        body:{
            name
        }
    })
}

export const GetCurrentUser = ()=>{
    return customFetch<User>('/api/user')
}