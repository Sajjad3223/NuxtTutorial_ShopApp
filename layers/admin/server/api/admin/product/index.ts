export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  const page = query.page ?? 1;
  const take = query.take ?? 10;
  const search = query.search ?? '';

  const products = await $fetch('http://localhost:3001/products');

  let filteredProducts = products.filter(p=>p.title.includes(search))
  
  const from = (Number(page)-1) * take;
  filteredProducts = filteredProducts.splice(from, take);

  const pagesCount = Math.ceil(products.length / take);

  return {
    pagesCount,
    data:filteredProducts
  };
})
