export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number,
) => {
  return{
    id,
    isNew:isNew ?? true,
    stock: stock ?? 10,
  }
}

const producto1 = createProduct(1,false,12)
console.log(producto1);
const producto2 = createProduct(2)
console.log(producto2);

