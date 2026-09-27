export interface Cart {
  totalPrice: number
  finalPrice: number
  discount: number
  status: number
  created_at: string
  items: CartItem[]
  id: string
}

export interface CartItem {
  id: number
  productId: string
  productTitle: string
  productImage: string
  quantity: number
  price: number
}
