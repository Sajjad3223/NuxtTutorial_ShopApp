export default defineEventHandler(async (event) => {

  const userData = getUserData(event);

  const ordersResult = await $fetch(`http://localhost:3001/orders`);

  return ordersResult.filter(o=>o.userId === userData?.id);
})
