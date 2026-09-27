export default defineEventHandler(async (event) => {
  const {name} = await readBody(event);

  const userData = getUserData(event);

  const user = await $fetch(`http://localhost:3001/users/${userData.id}`);
  if(!user) throw createError({statusCode:404});

  user.fullName = name;
  await $fetch(`http://localhost:3001/users/${userData.id}`,{
    method:'PUT',
    body:user
  });

  return user;
})
