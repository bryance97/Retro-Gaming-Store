const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'RANDOM' },
    { name: 'RANDOM 1' },
    { name: 'Random 2' },
    { name: 'Random 3' },
    { name: 'Random 4 ' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Duck Hunt - Super',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'duckhunt.jpg',
      category: categories[0]._id,
      price: 15.99,
      quantity: 50
    },
    {
      name: 'Exitebike',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'excitebikejpg.jpg',
      category: categories[0]._id,
      price: 30.99,
      quantity: 25
    },
    {
      name: 'Mario Bros',
      category: categories[1]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'mariobros.jpg',
      price: 49.99,
      quantity: 20
    },
    {
      name: 'Tennage Muntant Ninja Turtles - The Arcade Game',
      category: categories[1]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'tmnt.jpg',
      price: 18.99,
      quantity: 50
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Timmy',
    lastName: 'Washington',
    email: 'timmy@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Joseph',
    lastName: 'Smith',
    email: 'jsmith@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});