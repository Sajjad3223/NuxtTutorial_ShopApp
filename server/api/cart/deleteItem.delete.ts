export default defineEventHandler(async (event) => {
  const {itemId} = getQuery(event);

  const order = await getOpenOrder(event);
  order.items = order.items.filter(i=>i.id != itemId);
  
  await $fetch(`http://localhost:3001/orders/${order.id}`,{
    method:'PUT',
    body:order
  })

  return order;
})
