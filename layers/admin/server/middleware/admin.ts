export default defineEventHandler(async (event) => {
  if(event.path.startsWith('/api/admin')){
    const userData = getUserData(event);
    
    const user = await $fetch(`http://localhost:3001/users/${userData.id}`);
    if(!user) throw createError({statusCode:401});

    const isAdmin = user.roles.includes('admin');
    if(!isAdmin) throw createError({statusCode:401});
  }
})
