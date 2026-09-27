export interface ProductCardDto{
    title:string;
    shortDescription:string;
    image:string;
    id:number;
    price:number;
}

export interface ProductDto {
  id: number
  title: string
  shortDescription: string
  description: string
  price: number
  discount: number
  image: string
  comments: Comment[]
}

export interface Comment {
  id: number
  fullName: string
  comment: string
  created_at: string
}
