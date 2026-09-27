export default defineEventHandler(async (event) => {
  const id = getRouterParam(event,'id');
  const {productId} = getQuery(event);

  const product = await $fetch(`http://localhost:3001/products/${productId}`);
  product.comments = product.comments.filter(c=>c.id != id);

  const result = await $fetch(`http://localhost:3001/products/${productId}`,{
    method:'PUT',
    body:product
  });

  return {
    isSuccess:true,
    data:result
  }
})
