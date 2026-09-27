export default defineEventHandler(async (event) => {
  const {id} = getRouterParams(event);
  const body = await readBody(event);
  
  const order = await $fetch(`http://localhost:3001/orders/${id}`);

  const result = await $fetch(`http://localhost:3001/orders/${id}`,{
    method:'PUT',
    body:{
      ...order,
      ...body
    }
  });

  return {
    isSuccess:true,
    data:result
  };
})
