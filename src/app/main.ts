import { addProduct } from "./products/product.service";

addProduct({
  id: 1,
  titles: 'Producto 1',
  createdAt: new Date(),
  stock: 10,
  size: 'S',
  category:{
    id: 1,
    name: 'Categoría 1'
  }
})
