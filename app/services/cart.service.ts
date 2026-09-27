import { type Cart } from './../../models/cart';


export const GetAllCarts = ()=>{
    return customFetch<Cart[]>('/api/cart/getAll');
}

export const GetPendingCart = ()=>{
    return customFetch<Cart>('/api/cart/pending');
}

export const AddToCart = (id:number,quantity:number = 1)=>{
    
    return customFetch(`/api/cart/add`,{
        method:'POST',
        body:{
            productId:id,
            quantity
        }
    })
}

export const ChangeQuantity = (itemId:number,newQuantity:number)=>{
    return customFetch(`/api/cart/changeQuantity`,{
        method:'PUT',
        body:{
            itemId,
            newQuantity
        }
    })
}

export const DeleteItemFromCart = (itemId:number)=>{
    return customFetch(`/api/cart/deleteItem`,{
        method:'DELETE',
        query:{
            itemId,
        }
    })
}

export const FinalizeOrder = ()=>{
    return customFetch(`/api/cart/finalizeOrder`,{
        method:'PUT'
    })
}