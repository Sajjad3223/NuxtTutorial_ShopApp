import { ProductDto } from "~~/models/product";

export default defineEventHandler(async (event) => {
  const {comment,productId} = await readBody(event);

  const userData = getUserData(event);

  const user = await $fetch(`http://localhost:3001/users/${userData.id}`);
  if(!user) throw createError({statusCode:404});

  const newComment = {
    fullName:user.fullName,
    comment,
    created_at:new Date()
  };
  let product = await $fetch<ProductDto>(`http://localhost:3001/products/${productId}`);
  product.comments.push(newComment);

  const result = $fetch<ProductDto>(`http://localhost:3001/products/${productId}`,{
    method:'PUT',
    body:product
  });

  return newComment;
})
