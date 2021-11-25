const {gql} = require('apollo-server-express')
const typeDefs = gql`
    type Proyecto{
        name: String
        generalObjective: String
        budget: Int
    }
    type Query{
        proyectos: [Proyecto]
        proyecto(name: String): Proyecto
    }
    
`
module.exports = typeDefs