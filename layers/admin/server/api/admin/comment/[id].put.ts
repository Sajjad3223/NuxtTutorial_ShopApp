export default defineEventHandler(async (event) => {
  const id = getRouterParam(event,'id');
  const {productId} = getQuery(event);
  const body = await readBody(event);

  const product = await $fetch(`http://localhost:3001/products/${productId}`);
  let comment = product.comments.find(c=>c.id == id);

  if(!comment) throw createError({status:404,statusText:'نظر یافت نشد!'});

  comment.isActive = true;

  const result = await $fetch(`http://localhost:3001/products/${productId}`,{
    method:'PUT',
    body:product
  });

  return {
    isSuccess:true,
    data:result
  }
})
