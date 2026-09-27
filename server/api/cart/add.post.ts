import { ProductDto } from "~~/models/product";
import jwt from 'jsonwebtoken';

export default defineEventHandler(async (event) => {
  const {productId,quantity} = await readBody(event);

    
  const userData = getUserData(event);

  const result = await $fetch<ProductDto>(`http://localhost:3001/products/${productId}`);

  const ordersResult = await $fetch(`http://localhost:3001/orders`);
  let pendingCart = ordersResult.find(o=>o.status === 0 && o.userId === userData.id);
  if(!pendingCart){
    pendingCart = {
      userId:userData.id,
      totalPrice:0,
      finalPrice:0,
      discount:0,
      status:0,
      created_at:new Date(),
      items:[]
    }
    const res = await $fetch(`http://localhost:3001/orders`,{
      method:'POST',
      body:pendingCart
    });
    pendingCart.id = res.id;
  }

  const existItem = pendingCart.items.find(i=>i.productId == productId);

  if(existItem)
    existItem.quantity++;
  else
    pendingCart.items.push({
      id:Math.floor(Math.random() * 1000),
      productId:result.id,
      productTitle:result.title,
      productImage:result.image,
      quantity:quantity,
      price:result.price,
    })

  const cartTotalprice = pendingCart.items.length > 1 ?
  pendingCart.items.reduce((a,b)=>(a.price * a.quantity) + (b.price * b.quantity)) :
  pendingCart.items.length > 0 ? (pendingCart.items[0].price * pendingCart.items[0].quantity) : 0;

  pendingCart.totalPrice = cartTotalprice;
  pendingCart.finalPrice = cartTotalprice;

  await $fetch(`http://localhost:3001/orders/${pendingCart.id}`,{
      method:'PUT',
      body:pendingCart
    });

    return {
      status:true,
      data:pendingCart
    }
})
