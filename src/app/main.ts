import { addProduct } from "./products/product.service";

addProduct({
  id: 1,
  titles: 'Producto 1',
  stock: 10,
  size: 'S',
  createdAt: new Date(),
  updatedAt: new Date(),
  category:{
    id: 1,
    name: 'Categoría 1',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
})
