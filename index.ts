import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // ... you will write your Prisma Client queries here
    //   const user = await prisma.user.create({
    //     data: {
    //       name: 'Alice',
    //       email: 'alice@prisma.io',
    //     },
    //   })
    //   console.log(user)


    //   const users = await prisma.user.findMany()
    //   console.log(users)

    //   const user = await prisma.user.create({
    //     data: {
    //       name: 'Bob',
    //       email: 'bob@prisma.io',
    //       posts: {
    //         create: {
    //           title: 'Hello World',
    //         },
    //       },
    //     },
    //   })
    //   console.log(user)

    //   const usersWithPosts = await prisma.user.findMany({
    //     include: {
    //       posts: true,
    //     },
    //   })
    //   console.dir(usersWithPosts, { depth: null })

    // // create data
    // const userData = Array.from("ABCDEFGHIJK").map((i) => ({
    //     name: `user-${i}`,
    //     email: `user-${i}@email.com`,
    //     posts: {
    //         create: [
    //             { title: `Hello world by user-${i}-1` },
    //             { title: `Hello world by user-${i}-2` },
    //             { title: `Hello world by user-${i}-3` },
    //             { title: `Hello world by user-${i}-4` },
    //             { title: `Hello world by user-${i}-5` },
    //             { title: `Hello world by user-${i}-6` },
    //             { title: `Hello world by user-${i}-7` },
    //             { title: `Hello world by user-${i}-8` },
    //             { title: `Hello world by user-${i}-9` },
    //             { title: `Hello world by user-${i}-10` }
    //         ]
    //     },
    // }))

    // // insert data
    // userData.forEach(async (u) => {
    //     const user = await prisma.user.create({
    //         data: u
    //     })
    //     console.log(user)
    // })

    // pagination - 1
    // const results = await prisma.post.findMany({
    //     skip: 3,
    //     take: 4,
    // })
    // console.log(results)


    // paginaion - 2
    const queryResults = await prisma.post.findMany({
        take: 4,
        skip: 1, // Skip the cursor
        cursor: {
            id: 3,
        },
        orderBy: {
            id: 'asc',
        },
    })
    console.log(queryResults)

}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })