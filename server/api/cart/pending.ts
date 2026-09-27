export default defineEventHandler(async (event) => {

  const userData = getUserData(event);

  const ordersResult = await $fetch(`http://localhost:3001/orders`);
  let pendingCart = ordersResult.find(o=>o.status === 0 && o.userId === userData.id);
  
  if(pendingCart){
    const cartTotalprice = pendingCart.items.length > 1 ?
    pendingCart.items.reduce((a,b)=>(a.price * a.quantity) + (b.price * b.quantity)) :
    pendingCart.items.length > 0 ? (pendingCart.items[0].price * pendingCart.items[0].quantity) : 0;

    pendingCart.totalPrice = cartTotalprice;
    pendingCart.finalPrice = cartTotalprice;
  }

  return pendingCart;
})
