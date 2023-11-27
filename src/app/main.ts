import { faker } from '@faker-js/faker';

import { addProduct, products } from './products/product.service';

for (let index = 0; index < 50; index++) {
  addProduct({
    id: faker.string.uuid(),
    description: faker.commerce.productDescription(),
    image: faker.image.url(),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.string.alpha(),
    title: faker.commerce.productName(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    stock: faker.number.int({ min: 0, max: 100 }),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    category: {
      id: faker.string.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  });
}

console.log(products);
