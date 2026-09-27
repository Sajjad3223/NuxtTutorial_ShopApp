export default defineEventHandler(async (event) => {
  const {id} = getRouterParams(event);
  const body = await readBody(event);
  
  const user = await $fetch(`http://localhost:3001/users/${id}`);

  const result = await $fetch(`http://localhost:3001/users/${id}`,{
    method:'PUT',
    body:{
      ...user,
      ...body
    }
  });

  return {
    isSuccess:true,
    data:result
  };
})
