export default defineEventHandler(async (event) => {
  const {id} = getRouterParams(event);
  
  const result = await $fetch(`http://localhost:3001/orders/${id}`,{
    method:'DELETE'
  });

  return {
    isSuccess:true,
    data:result
  };
})
