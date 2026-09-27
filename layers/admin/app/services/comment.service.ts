

export const EditComment = (productId:number,id:string,command:any)=>{
    return customFetch(`/api/admin/comment/${id}`,{
        method:'PUT',
        body:command,
        query:{
            productId
        }
    })
}

export const DeleteComment = (productId:string,id:string)=>{
    return customFetch(`/api/admin/comment/${id}`,{
        method:'DELETE',
        query:{
            productId
        }
    })
}

export const GetAllCommentsByAdmin = (page:number = 1,take:number = 10,search:string = '')=>{
    return customFetch('/api/admin/comment',{
        query:{
            page,
            take,
            search
        }
    })
}