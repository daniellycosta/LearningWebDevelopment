const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')

const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Link = require('./resolvers/Link')


//O que vai ser retornado de fato quando uma operação for requisitada pelo cliente
//possui as Queries, as Mutations e as Subscriptions
const resolvers = {
    Query, 
    Mutation,
    User,
    Link
}


const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context:request=>{return{...request,prisma }},
})
server.start(()=>console.log(`Server is running on http://localhost:4000`))