import type { ProductDto } from "~~/models/product";
import type { CreateProductCommand, EditProductCommand } from "../models/product";

export const CreateProduct = (command:CreateProductCommand)=>{
    return customFetch('/api/admin/product/add',{
        method:'POST',
        body:command
    })
}

export const EditProduct = (id:string,command:EditProductCommand)=>{
    return customFetch(`/api/admin/product/${id}`,{
        method:'PUT',
        body:command
    })
}

export const DeleteProduct = (id:string)=>{
    return customFetch(`/api/admin/product/${id}`,{
        method:'DELETE'
    })
}

export const GetAllProductsByAdmin = (page:number = 1,take:number = 10,search:string = '')=>{
    return customFetch<ProductDto[]>('/api/admin/product',{
        query:{
            page,
            take,
            search
        }
    })
}

export const GetProductByAdmin = (id:string)=>{
    return customFetch<ProductDto>(`/api/admin/product/${id}`)
}