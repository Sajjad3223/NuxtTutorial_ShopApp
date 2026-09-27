export const getOpenOrder = async (event)=>{

  const userData = getUserData(event);

  const ordersResult = await $fetch(`http://localhost:3001/orders`);
  let pendingCart = ordersResult.find(o=>o.status === 0 && o.userId === userData.id);

  return pendingCart;
}