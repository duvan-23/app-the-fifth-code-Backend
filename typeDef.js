const { gql } = require('apollo-server-express')
const typeDefs = gql`
    type Proyecto{
        _id: ID
        name: String
        generalObjective: String
        specificObjectives: [String]
        budget: Float
        startDate: String
        endDate: String
        leader_id: String
        status: String      
    }

    type Usuario{
        _id: ID
        fullName: String
        identification: String
        email: String
        password: String
        role: String
        status: String
    }
    type Inscripcion{
        _id: ID
        project_id: ID
        user_id: ID
        status: String
        enrollmentDate: String
        egressDate: String
         
    }

    type Avance{
        _id: ID
        project_id: String
        addDate: String
        description: String
        observations: String
    }
    
    type Query{
        proyectos: [Proyecto]
        proyecto(name: String): Proyecto
        getProyecto(name:String): Proyecto
        usuarios: [Usuario]
        getUsuario(identification: String): Usuario
        inscripciones: [Inscripcion]
        getInscripcion(_id: ID):Inscripcion
        avances: [Avance]
        getAvances(project_id: ID): Avance
    }

    input ProyectoInput{
        name: String
        generalObjective: String
        specificObjectives: [String]
        budget: Float
        startDate: String
        endDate: String
        leader_id: String
        status: String 
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

    input UsuarioInput{
        fullName: String
        identification: String
        email: String
        password: String
        role: String
        status: String
    }
    input InscripcionInput{
    project_id: ID
    user_id: ID
    status: String
    enrollmentDate: String
    egressDate: String
    }

    input AvanceInput{
        project_id: String
        addDate: String
        description: String
        observations: String
    }

    type Mutation{
        createProyecto(Proyecto:ProyectoInput): String 
        activeProyecto(name:String): String 
        deleteProyecto(name1:String): String
        createUsuario(Usuario: UsuarioInput): String
        updateStatusUsuario(identification: String, status: String): String
        updateUsuario(_id: ID, fullName: String, identification: String, email: String, password: String, role: String, status: String): String
        deleteUsuario(identification: String): String
        updateStatusInscripcion(_id: ID, status: String): String
        deleteInscripcion(_id: ID):  ID
        createInscripcion(Inscripcion: InscripcionInput): String
        createAvance(Avance:AvanceInput): String
        updateAvance(_id:ID, description:String): String
        updateObservations(observations:String):String
        deleteAvance(proyecto1:String): String
        deleteObservation(observation1:String): String
        
    }
    
`


module.exports = typeDefs