import { faker } from '@faker-js/faker'
import { addProduct, products } from "./products/product.service";

for (let index = 0; index < 50; index++) {
  addProduct({
    titles: faker.commerce.productName(),
    stock: faker.number.int({min:10,max:100}),
    description:faker.commerce.productDescription(),
    image:faker.image.avatarGitHub(),
    color:faker.color.human(),
    price:parseInt(faker.commerce.price()),
    isNew:faker.datatype.boolean(),
    tags:[faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
    size: faker.helpers.arrayElement(['M', 'S', 'XL', 'L']),
    categoryId:faker.string.uuid().toString()
  })
}

console.log('====================================');
console.log(products);
console.log('====================================');
