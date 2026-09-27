export default defineEventHandler(async (event) => {
  const userData = getUserData(event);

  const user = await $fetch(`http://localhost:3001/users/${userData.id}`);
  if(!user) throw createError({statusCode:404});

  return user;
})
