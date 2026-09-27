export default defineEventHandler(async (event) => {
  const {itemId,newQuantity} = await readBody(event);

  const order = await getOpenOrder(event);
  
  const item = order.items.find(i=>i.id == itemId);
  console.log(item)
  item.quantity = newQuantity;

  await $fetch(`http://localhost:3001/orders/${order.id}`,{
    method:'PUT',
    body:order
  })

  return order;

})
