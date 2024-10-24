import { Category } from "../categories/category.model"
export type Sizes = 'S' | 'M' | 'L' | 'XL'
export interface Product {
  id: string | number
  titles: string
  createdAt:Date
  stock:number
  size?: Sizes
  category:Category
}
