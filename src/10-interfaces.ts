type Sizes = 'S' | 'M' | 'L' | 'XL'
// type Product = {
//   id: string | number
//   titles: string
//   createdAt:Date
//   stock:number
//   size: Sizes
// }
interface Product {
  id: string | number
  titles: string
  createdAt:Date
  stock:number
  size?: Sizes
}

const products: Product[] = []

products.push({
  id: 1,
  titles: 'Producto 1',
  createdAt: new Date(),
  stock: 10,
  size: 'S',
})

const addProduct = (data: Product) => {
  products.push(data)
}
