import { defineStore } from 'pinia'
import { AddToCart, ChangeQuantity, DeleteItemFromCart, FinalizeOrder, GetPendingCart } from '~/services/cart.service'
import type { Cart } from '~~/models/cart'

export const useCartStore = defineStore('cart',()=>{

  const pendingCart = ref<Cart | null>(null)

  const refreshCart = async ()=>{
    pendingCart.value = await GetPendingCart();
  }

  const addToCart = async (productId:number,quantity:number = 1)=>{
    await AddToCart(productId,quantity);
    await refreshCart();
  }
  const changeCount = async (itemId:number,quantity:number)=>{
    await ChangeQuantity(itemId,quantity);
    await refreshCart();
  }
  const deleteItem = async (itemId:number)=>{
    await DeleteItemFromCart(itemId);
    await refreshCart();
  }
  const finalize = async ()=>{
    await FinalizeOrder();
    await refreshCart();
  }

  return {
    pendingCart,
    refreshCart,
    addToCart,
    changeCount,
    deleteItem,
    finalize
  }
})
