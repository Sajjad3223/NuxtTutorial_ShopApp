export default defineEventHandler(async (event) => {
  const {id} = getRouterParams(event);
  const body = await readBody(event);
  
  const product = await $fetch(`http://localhost:3001/products/${id}`);

  const result = await $fetch(`http://localhost:3001/products/${id}`,{
    method:'PUT',
    body:{
      ...product,
      ...body
    }
  });

  return {
    isSuccess:true,
    data:result
  };
})
