

export const EditOrder = (id:string,command:any)=>{
    return customFetch(`/api/admin/order/${id}`,{
        method:'PUT',
        body:command
    })
}

export const DeleteOrder = (id:string)=>{
    return customFetch(`/api/admin/order/${id}`,{
        method:'DELETE'
    })
}

export const GetAllOrdersByAdmin = (page:number = 1,take:number = 10,search:string = '')=>{
    return customFetch('/api/admin/order',{
        query:{
            page,
            take,
            search
        }
    })
}

export const GetOrderByAdmin = (id:string)=>{
    return customFetch(`/api/admin/order/${id}`)
}