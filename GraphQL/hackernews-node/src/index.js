const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')

//O que vai ser retornado de fato quando uma operação for requisitada pelo cliente
//possui as Queries, as Mutations e as Subscriptions
const resolvers = {
    Query:{
        info:()=>`This is the API of a Hackernews Clone`,
        feed:()=>(root, args, context, info)=>{
            return context.prisma.links()
        }, 
    }, 
    Mutation:{
        post:(root,args, context)=>{
            return context.prisma.createLink({
                url: args.url,
                description: args.description,
            })
        },
        /*deleteLink:(root,args,context)=>{
            return context.prisma.deleteLink({
                id:args.id
            })
        },
        updateLink:(root,args,context)=>{
           return context.prisma.updateLink({
               id:args.id,
               url:args.url,
               description:args.description
           })
        }*/
    },
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context:{ prisma },
})
server.start(()=>console.log(`Server is running on http://localhost:4000`))