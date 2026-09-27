export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  const page = query.page ?? 1;
  const take = query.take ?? 10;
  const search = query.search ?? '';

  const orders = await $fetch('http://localhost:3001/orders');

  let filteredOrders = orders;
  
  const from = (Number(page)-1) * take;
  filteredOrders = filteredOrders.splice(from, take);

  const pagesCount = Math.ceil(orders.length / take);

  return {
    pagesCount,
    data:filteredOrders
  };
})
