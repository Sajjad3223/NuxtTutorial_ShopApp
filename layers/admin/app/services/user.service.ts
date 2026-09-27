import type { User } from "~/models/user"


export const CreateUser = (command:any)=>{
    return customFetch('/api/admin/user/add',{
        method:'POST',
        body:command
    })
}

export const EditUser = (id:string,command:any)=>{
    return customFetch(`/api/admin/user/${id}`,{
        method:'PUT',
        body:command
    })
}

export const DeleteUser = (id:string)=>{
    return customFetch(`/api/admin/user/${id}`,{
        method:'DELETE'
    })
}

export const GetAllUsersByAdmin = (page:number = 1,take:number = 10,search:string = '')=>{
    return customFetch<User[]>('/api/admin/user',{
        query:{
            page,
            take,
            search
        }
    })
}

export const GetUserByAdmin = (id:string)=>{
    return customFetch<User>(`/api/admin/user/${id}`)
}