import { CreateProductCommand } from './../../../../app/models/product';
export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const result = await $fetch('http://localhost:3001/users',{
    method:'POST',
    body
  })

  return {
    isSuccess:true,
    data:result
  }
})
