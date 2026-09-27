export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  const page = Number(query.page ?? '1') ?? 1;
  const take = Number(query.take ?? '10') ?? 10;
  const search = query.search ?? '';

  const products = await $fetch('http://localhost:3001/products');

  const comments = products.flatMap(p=>p.comments.map(c=>({
    id:c.id,
    productId:p.id,
    fullName:c.fullName,
    comment:c.comment,
    isActive:c.isActive ?? false
  })));

  let filteredComments = comments.filter(c=>c.comment.includes(search));

  const from = (page - 1) * take;
  filteredComments = filteredComments.splice(from,take);

  const pagesCount = Math.ceil(comments.length / take);

  return {
    pagesCount,
    data:filteredComments
  }
})
