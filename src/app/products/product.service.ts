import { faker } from "@faker-js/faker/."
import { CreateProductDto, FindProductDto, UpdateProductDto } from "./product.dto"
import { Product } from "./product.model"
export const products: Product[] = []

export const addProduct = (data: CreateProductDto):Product => {
  const newProduct ={
    ...data,
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category:{
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }
  }
  products.push(newProduct)
  return newProduct
}

export const updateProduct = (id:string, changes: UpdateProductDto):Product => {
  const index = products.findIndex(p => p.id === id)
  const prevDate = products[index]
  products[index] = {
    ...prevDate,
    ...changes
  }
  return products[index]
}

export const deleteProduct = (id: string) => {
// Code
}

export const getProduct = (id:string) =>{
  // Code
}

export const findProducts = (dto:FindProductDto):Product[] => {
  // Code
  return products
}

export const listProduct = () => {

}
