import { type ProductDto, type ProductCardDto } from "~~/models/product";

export const GetAllProducts = (page:number = 1,take:number = 20,search:string | undefined = undefined)=>{
    return customFetch<{pagesCount:number,products:ProductCardDto[],currentPage:number}>(`/api/product/list`,{
        query:{
            page,
            take,
            search
        }
    });
}

export const GetProductById = (id:number)=>{
    return customFetch<ProductDto>(`/api/product/${id}`)
}

export const SendComment = (productId:number,comment:string)=>{
    return customFetch('/api/product/addComment',{
        method:'POST',
        body:{
            productId,
            comment
        }
    })
}