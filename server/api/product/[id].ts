export default defineEventHandler(async (event) => {
  const {id} = getRouterParams(event);
  let result = await $fetch<ProductDto>(`http://localhost:3001/products/${id}`);

  return result;
})
