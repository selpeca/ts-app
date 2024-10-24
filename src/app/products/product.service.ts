import { Product } from "./product.model"
export const products: Product[] = []

export const addProduct = (data: Product) => {
  // No se puede sobrescribir
  // data.id = products.length + 1
  products.push(data)
}

export const updateProduct = (id:string, data: Product) => {
// Code
}

export const deleteProduct = (id: string) => {
// Code
}

export const getProduct = (id:string) =>{
  // Code
}

export const findProduct = (name:string) => {
  // Code
}

export const listProduct = () => {

}
