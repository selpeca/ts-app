import { Product } from "./product.model";

// Nuevo tipo omitiendo campos
// type CreateProductDto = Omit<Product, 'id'|'createdAt'|'updatedAt'|'category'>
export interface CreateProductDto extends Omit<Product, 'id'|'createdAt'|'updatedAt'|'category'>{
  categoryId:string
}

// Nuevo tipo seleccionando campos
type example = Pick<Product, 'color'|'description'>

export interface UpdateProductDto extends Partial<CreateProductDto>{}
export interface FindProductDto extends Partial<Product>{}
type example2 = Readonly<Product>
