const {gql} = require('apollo-server-express')
const typeDefs = gql`
    type Proyecto{
    
    _id: ID
    name: String
    generalObjective: String
    specificObjectives: [String]
    budget: Float
    startDate: String
    endDate: String
    leader_id: ID
    status: String      
    }
    
    type Query{
        proyectos: [Proyecto]
        proyecto(name: String): Proyecto
        getProyecto(name:String): Proyecto
    }
    input ProyectoInput{
        name: String
        generalObjective: String
        specificObjectives: [String]
        budget: Float
        startDate: String
        endDate: String
        status: String 
    }
    type Mutation{
        createProyecto(Proyecto:ProyectoInput): String 
        activeProyecto(name:String): String 
        deleteProyecto(name1:String): String 
        
    }
    
`
    

module.exports = typeDefs