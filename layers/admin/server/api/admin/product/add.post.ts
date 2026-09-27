import { CreateProductCommand } from './../../../../app/models/product';
export default defineEventHandler(async (event) => {
  const body:CreateProductCommand = await readBody(event);

  const result = await $fetch('http://localhost:3001/products',{
    method:'POST',
    body:{
      ...body,
      comments:[]
    }
  })

  return {
    isSuccess:true,
    data:result
  }
})
