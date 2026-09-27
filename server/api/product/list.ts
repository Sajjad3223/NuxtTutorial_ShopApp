import { ProductCardDto,ProductDto } from '../../../models/product';
export default defineEventHandler(async (event) => {
  const {page,take,search} = getQuery(event);

  const takeNumber = Number(take) ?? 8;
  const skip = ((Number(page) ?? 1) - 1) * takeNumber;

  let result = await $fetch<ProductDto[]>('http://localhost:3001/products');

  if(search){
    result = result.filter(p=>p.title.includes(search.toString()));
  }

  const pagesCount = Math.ceil(result.length / takeNumber);

  const products = result.splice(skip,takeNumber);

  return {
    products: products.map(product=>{
      return {
        id:product.id,
        title:product.title,
        shortDescription:product.shortDescription,
        image:product.image,
        price:product.price
      } as ProductCardDto
    }),
    pagesCount,
    currentPage:page ?? 1
}

})
