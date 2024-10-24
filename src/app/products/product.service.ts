import { Product } from "./product.model"
const products: Product[] = []


export const addProduct = (data: Product) => {
  // No se puede sobrescribir
  // data.id = products.length + 1
  products.push(data)
}
