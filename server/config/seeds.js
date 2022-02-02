const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'NES' },
    { name: 'XBOX' },
    { name: 'Game Cube' },
    { name: 'PlayStation' },
    { name: 'PC' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Duck Hunt NES 1984',
      description:
        'Duck Hunt is a 1984 light gun shooter video game developed and published by Nintendo for the Nintendo Entertainment System video game console and the Nintendo Vs. System arcade hardware',
      image: 'duckhunt.jpg',
      category: categories[0]._id,
      price: 15.99,
      quantity: 50
    },
    {
      name: 'Exitebike NES 1984',
      description:
        'Excitebike is a motocross racing video game developed and published by Nintendo. ',
      image: 'excitebikejpg.jpg',
      category: categories[0]._id,
      price: 30.99,
      quantity: 25
    },
    {
      name: 'Mario Bros NES 1983',
      category: categories[0]._id,
      description:
        'Mario Bros. is a 1983 platform game developed and published for arcades by Nintendo.',
      image: 'mariobros.jpg',
      price: 49.99,
      quantity: 20
    },
    {
      name: 'Tennage Muntant Ninja Turtles - The Arcade Game NES 1989',
      category: categories[0]._id,
      description:
        'Teenage Mutant Ninja Turtles, released in Japan as TMNT: Super Kame Ninja and in Europe as Teenage Mutant Hero Turtles, is a 1989 beat em up arcade game released by Konami.',
      image: 'tmnt.jpg',
      price: 18.99,
      quantity: 50
    },
    {
      name: '007 - Tomrrow Never Dies PS1 1999',
      category: categories[2]._id,
      description:
        'Tomorrow Never Dies is a 1999 third-person shooter stealth video game based on the 1997 James Bond film of the same name.',
      image: '007.jpg',
      price: 49.99,
      quantity: 9
    },
    {
      name: 'Call of Duty - Finest Hour PS2 2004',
      category: categories[3]._id,
      description:
        'Call Of Duty: Finest Hour leads you back into the World War, where you will experience epic battlefield moments in the wars most legendary conflicts.',
      image: 'cod1.jpg',
      price: 11.99,
      quantity: 17
    },
    {
      name: 'Call of Duty 2 - Big Red One PS2 2005',
      category: categories[3]._id,
      description:
        'Call of Duty 2: Big Red One is a first-person shooter video game developed by Treyarch and High Voltage Software and published by Activision for GameCube, PlayStation 2 and Xbox.',
      image: 'cod2.jpg',
      price: 19.99,
      quantity: 25
    },
    {
      name: 'GTA San Andres XB360 2004',
      category: categories[1]._id,
      description:
        'Grand Theft Auto: San Andreas is a 2004 action-adventure game developed by Rockstar North and published by Rockstar Games.',
      image: 'GTA.jpg',
      price: 15.99,
      quantity: 120
    },
    {
      name: 'Halo XB 2001',
      category: categories[1]._id,
      description:
        'Halo: Combat Evolved is a 2001 first-person shooter game developed by Bungie and published by Microsoft Game Studios. ',
      image: 'halo.jpg',
      price: 12.99,
      quantity: 23
    },
    {
      name: 'Halo 2 XB 2004',
      category: categories[1]._id,
      description:
        'Halo 2 is a 2004 first-person shooter game developed by Bungie and published by Microsoft Game Studios for the Xbox console.',
      image: 'halo2.jpg',
      price: 34.99,
      quantity: 21
    },
    {
      name: 'Hercules PS1 1997',
      category: categories[3]._id,
      description:
        'You take control of Hercules, son of the god Zeus and a mortal woman, the strongest man in the world and the legendary hero in the Greek mythology.',
      image: 'hercules.jpg',
      price: 40.00,
      quantity: 8
    },
    {
      name: 'Kirby Adventure NES 1993',
      category: categories[0]._id,
      description:
        'Kirbys Adventure is a 1993 platform game developed by HAL Laboratory and published by Nintendo for the Nintendo Entertainment System.',
      image: 'kirby.jpg',
      price: 18.99,
      quantity: 50
    },
    {
      name: 'Super Mario 2 NES 1988',
      category: categories[0]._id,
      description:
        'PSuper Mario Bros. 2 is a platform video game developed and published by Nintendo for the Nintendo Entertainment System.',
      image: 'mario2.jpg',
      price: 19.99,
      quantity: 50
    },
    {
      name: 'Mario Kart - Double Dash GC 2003',
      category: categories[2]._id,
      description:
        'Mario Kart: Double Dash is a 2003 kart racing video game developed by Nintendo Entertainment Analysis & Development and published by Nintendo for the GameCube. ',
      image: 'mariokart.jpg',
      price: 89.99,
      quantity: 5
    },
    {
      name: 'Megaman GC 2004',
      category: categories[2]._id,
      description:
        'Mega Man Anniversary Collection is a compilation of video games developed by Atomic Planet and published by Capcom.',
      image: 'megaman.jpg',
      price: 18.99,
      quantity: 512
    },
    {
      name: 'Mortal Combat - Deception XB 2004',
      category: categories[1]._id,
      description:
        'Mortal Kombat: Deception is a fighting video game developed and published by Midway as the sixth installment of the Mortal Kombat video game franchise.',
      image: 'mortalcombat.jpg',
      price: 18.99,
      quantity: 13
    },
    {
      name: 'Pikmin GC 2001',
      category: categories[2]._id,
      description:
        'Everythings going fine for our intrepid spaceman until a rogue comet collides with his spaceship and forces him into an emergency landing on a lush world.',
      image: 'pikmin.jpg',
      price: 49.99,
      quantity: 2
    },
    {
      name: 'Rayman PS1 1995',
      category: categories[3]._id,
      description:
        'Rayman is a side-scrolling platform video game developed and published by Ubi Soft Entertainment as the first instalment of the Rayman series.',
      image: 'rayman.jpg',
      price: 17.99,
      quantity: 31
    },
    {
      name: 'Scooby Doo - Night of 100 Frights GC 2002',
      category: categories[2]._id,
      description:
        'Scooby-Doo! Night of 100 Frights is a third person platform game with action elements that was developed by Heavy Iron Studios and published by THQ for the PlayStation 2, GameCube, and Xbox consoles.',
      image: 'cod2.jpg',
      price: 50.00,
      quantity: 6
    },
    {
      name: 'Spider-man XB 2002',
      category: categories[1]._id,
      description:
        'Spider-Man, also known as Spider-Man: The Movie, is a 2002 action-adventure video game based on the Marvel Comics character Spider-Man. ',
      image: 'spiderman.jpg',
      price: 18.99,
      quantity: 12
    },
    {
      name: 'Spider-man PS1 2000',
      category: categories[3]._id,
      description:
        'Spider-Man is a 2000 action-adventure video game based on the Marvel Comics character Spider-Man.',
      image: 'spidey.jpg',
      price: 40.00,
      quantity: 23
    },
    {
      name: 'Spyro PS1 2002',
      category: categories[3]._id,
      description:
        'Travel through different worlds in Spyro: Collectors, Start with Spyro the Dragon, which features six different worlds, each with various subworlds where the enemies are fun.',
      image: 'spyro.jpg',
      price: 399.95,
      quantity: 9
    },
    {
      name: 'Zelda - Twilight Princess XB 2006',
      category: categories[1]._id,
      description:
        'When an evil shadow stretches from the heart of Hyrule to its peaceful borderlands, a young farm boy named Link must awaken the hero .... and the animal ... within.',
      image: 'zelda.jpg',
      price: 150.00,
      quantity: 3
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