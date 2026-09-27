export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const settings = await $fetch('http://localhost:3001/settings',{
    method:'PUT',
    body
  });

  return {
    isSuccess:true,
    data:settings
  };
})
