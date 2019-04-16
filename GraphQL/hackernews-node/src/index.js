const {GraphQLServer}=require('graphql-yoga')
const {links} = require('../data_example/links')

/*Schema Definition --> movido para arquivo próprio (schema.graphql)

//Query: Quais operações podem ser feitas à api
//info é o nome da operação e String é o retorno
const typeDefs = `
type Query{
    info: String!
    feed:[Link!]!
}

type Mutation{
    post(url: String!, description: String!): Link!
}

type Link{
    id: ID!
    description: String!
    url: String!
}
`*/

let idCount = links.length
//O que vai ser retornado de fato quando uma operação for requisitada pelo cliente
//possui as Queries, as Mutations e as Subscriptions
const resolvers = {
    Query:{
        info:()=>`This is the API of a Hackernews Clone`,
        feed:()=>links, 
    }, 
    Mutation:{
        post:(parent,args)=>{
            const newLink={
                id:`link${idCount++}`,
                description:args.description,
                url:args.url,
            }
            links.push(newLink)
            return newLink
        },
        deleteLink:(parent,args)=>{
            const index = links.findIndex((link)=>link.id === args.id)
            const deletedLink = links[index]
            links.splice(index,1)
            return deletedLink
        },
        updateLink:(parent,args)=>{
            const index = links.findIndex((link)=>link.id === args.id)
            if(args.url){
                links[index].url = args.url
            }else if(args.description){
                links[index].description = args.description
            }else{
                links[index] = {
                    url:args.url,
                    description:args.description
                }
            }
            return links[index]
        }
    },
    /*Link:{  
       id:(parent)=>parent.id,
       description:(parent)=>parent.description,
       url:(parent)=>parent.url,
    }*/
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
})
server.start(()=>console.log(`Server is running on http://localhost:4000`))