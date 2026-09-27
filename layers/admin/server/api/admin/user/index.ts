export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  const page = query.page ?? 1;
  const take = query.take ?? 10;
  const search = query.search ?? '';

  const users = await $fetch('http://localhost:3001/users');

  let filteredUsers = users.filter(p=>p.fullName?.includes(search))
  
  const from = (Number(page)-1) * take;
  filteredUsers = filteredUsers.splice(from, take);

  const pagesCount = Math.ceil(users.length / take);

  return {
    pagesCount,
    data:filteredUsers
  };
})
