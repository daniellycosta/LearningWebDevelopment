const {prisma} = require('./generated/prisma-client')

async function main(){
    const newLink = await prisma.createLink({
        url:'prisma.io',
        description:'Prisma replaces traditional ORMs',
    })
    console.log(`Created new Link: ${newLink.url} (ID: ${newLink.id})`)

    const allLinks = await prisma.links()
    console.log(allLinks)
}
main().catch(error => console.log(error))