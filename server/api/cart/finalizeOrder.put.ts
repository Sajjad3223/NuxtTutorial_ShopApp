export default defineEventHandler(async (event) => {
  
  let order = await getOpenOrder(event);
  order.status = 1;

  await $fetch(`http://localhost:3001/orders/${order.id}`,{
    method:'PUT',
    body:order
  })

  return order;

})
