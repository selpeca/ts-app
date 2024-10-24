export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10,
) => {
  return{
    id,
    isNew:isNew,
    stock: stock,
  }
}

const producto1 = createProduct(1,false,12)
console.log(producto1);
const producto2 = createProduct(2)
console.log(producto2);

