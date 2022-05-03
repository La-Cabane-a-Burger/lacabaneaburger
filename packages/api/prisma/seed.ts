import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.upsert({
    where: { email: 'chef@lacabaneaburger.fr' },
    update: {},
    create: {
      email: 'chef@lacabaneaburger.fr',
      password: 'lacabaneaburger',
      phone: '+33639679304',
    },
  })

  const store = await prisma.store.create({
    data: {
      city: 'Pontchâteau',
      slug: 'ponchateau',
      phone: '+33725078373',
      postal_code: 44160,
      address: '2A rue Gutenberg ZI du Landas',
      latitude: 47.42898740290803,
      longitude: -2.0694934159249296,
    },
  })

  const morning = await prisma.opening.create({
    data: {
      weekday: 'lundi',
      start: '11h30',
      end: '13h45',
      store: {
        connect: { id: store.id },
      },
    },
  })

  const afternoon = await prisma.opening.create({
    data: {
      weekday: 'lundi',
      start: '18h00',
      end: '21h30',
      store: {
        connect: { id: store.id },
      },
    },
  })

  const menu = await prisma.menu.upsert({
    where: { name: 'Cowboy' },
    update: {},
    create: {
      name: 'Cowboy',
      description: '',
      price: 11.5,
      category: 'burgers',
      menuItems: {
        create: [
          {
            item: {
              create: {
                name: 'Cowboy',
                description: '',
                category: 'burgers',
                price: 7.9,
                ingredients: {
                  create: [
                    {
                      ingredient: {
                        connectOrCreate: {
                          where: { name: 'Steak haché' },
                          create: {
                            name: 'Steak haché',
                            category: 'viandes',
                          },
                        },
                      },
                    },
                    {
                      ingredient: {
                        connectOrCreate: {
                          where: { name: 'Steak haché' },
                          create: {
                            name: 'Cheddar',
                            category: 'fromages',
                          },
                        },
                      },
                    },
                    {
                      ingredient: {
                        connectOrCreate: {
                          where: { name: 'Rondelle de tomate' },
                          create: {
                            name: 'Rondelle de tomate',
                            category: 'légumes',
                          },
                        },
                      },
                    },
                    {
                      ingredient: {
                        connectOrCreate: {
                          where: { name: 'Sauce barbecue' },
                          create: {
                            name: 'Sauce barbecue',
                            category: 'sauces',
                          },
                        },
                      },
                    },
                  ],
                },
              },
            },
          },
          {
            item: {
              connectOrCreate: {
                where: { name: 'Frites' },
                create: {
                  name: 'Frites',
                  category: 'accompagnement',
                  description: '',
                  price: 2.0,
                },
              },
            },
          },
          {
            item: {
              connectOrCreate: {
                where: { name: 'Fanta' },
                create: {
                  name: 'Fanta',
                  category: 'boissons',
                  description: '',
                  price: 1.6,
                },
              },
            },
            pickable: true
          },
        ],
      },
    },
  })

  const item = await prisma.item.upsert({
    where: { name: 'La Nordique' },
    update: {},
    create: {
      name: 'La Nordique',
      description: '',
      price: 7.9,
      category: 'salades',
      ingredients: {
        create: [
          {
            ingredient: {
              connectOrCreate: {
                where: { name: 'Salade' },
                create: { name: 'Salade', category: 'légumes' },
              },
            },
          },
          {
            ingredient: {
              connectOrCreate: {
                where: { name: 'Rondelle de tomate' },
                create: {
                  name: 'Rondelle de tomate',
                  category: 'légumes',
                },
              },
            },
          },
          {
            ingredient: {
              connectOrCreate: {
                where: { name: 'Saumon fumé' },
                create: {
                  name: 'Saumon fumé',
                  category: 'viandes',
                },
              },
            },
          },
          {
            ingredient: {
              connectOrCreate: {
                where: { name: 'Palet de chèvre affiné' },
                create: {
                  name: 'Palet de chèvre affiné',
                  category: 'fromages',
                },
              },
            },
          },
          {
            ingredient: {
              connectOrCreate: {
                where: { name: 'Vinaigrette balsamique' },
                create: {
                  name: 'Vinaigrette balsamique',
                  category: 'sauces',
                },
              },
            },
          },
        ],
      },
    },
  })

  const order = await prisma.order.create({
    data: {
      date: new Date(),
      price: 19.4,
      store: {
        connect: { id: store.id },
      },
      user: {
        connect: { email: 'chef@lacabaneaburger.fr' },
      },
      orderItems: {
        create: [
          {
            item: {
              connect: { name: 'La Nordique' },
            },
          },
          {
            item: {
              connect: { name: 'Cowboy' },
            },
            menu: {
              connect: { name: 'Cowboy' },
            },
          },
          {
            item: {
              connect: { name: 'Frites' },
            },
            menu: {
              connect: { name: 'Cowboy' },
            },
          },
        ],
      },
    },
  })

  console.log({ user, store, morning, afternoon, menu, item, order })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
