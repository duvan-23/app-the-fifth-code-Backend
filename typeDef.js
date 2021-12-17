const { gql } = require('apollo-server-express')
const typeDefs = gql`
<<<<<<< HEAD

    scalar Date

=======
  scalar Date
>>>>>>> 3873c338583390954f88f5552b7abab41eea9551
    type Proyecto{
        _id: ID
        name: String
        generalObjective: String
        specificObjectives: [String]
        budget: Float
        startDate: Date
        endDate: Date
        leader_id: String
        status: String  
        phase: String   
        integrantes: [String]
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
        project_id: String
        user_id: String
        status: String
        enrollmentDate: Date
        egressDate: Date
        role: String 
         
    }
    type Avance{
        _id: ID
        project_id: String
        addDate: Date
        description: String
        observations: String
    }
    
    type Query{
        proyectos: [Proyecto]
        proyecto(name: String): Proyecto
        getProyecto(name:String): Proyecto
        usuarios: [Usuario]
        getUsuario(_id: ID): Usuario
        inscripciones: [Inscripcion]
        getInscripcion(_id: ID):Inscripcion
        avances: [Avance]
        getAvances(project_id: String): Avance
    }
    input ProyectoInput{
        name: String
        generalObjective: String
        specificObjectives: [String]
        budget: Float
        startDate: Date
        endDate: Date
        leader_id: String
        status: String 
        phase: String
        integrantes: [String]
    }
    input ProyectoInput{
        name: String
        generalObjective: String
        specificObjectives: [String]
        budget: Float
<<<<<<< HEAD
        startDate: Date
        endDate: Date
=======
        startDate: String
        endDate: String
        leader_id: String
>>>>>>> 3873c338583390954f88f5552b7abab41eea9551
        status: String 
        phase: String
        integrantes: [String]
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
<<<<<<< HEAD
    project_id: ID
    user_id: ID
    status: String
    enrollmentDate: String
    egressDate: Date
    }

=======
        project_id: String
        user_id: String
        status: String
        enrollmentDate: String
        egressDate: String
        role: String
         
        }
>>>>>>> 3873c338583390954f88f5552b7abab41eea9551
    input AvanceInput{
        project_id: String
        addDate: Date
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
        updateStatusInscripcion(user_id: String, status: String): String
        deleteInscripcion(_id: ID):  ID
        createInscripcion(Inscripcion: InscripcionInput): String
        createAvance(Avance:AvanceInput): String
        updateAvance(project_id:String, description:String, observations:String): String
<<<<<<< HEAD
        deleteAvance(proyecto1:String, observation1:String): String
    
        
=======
        updateObservations(observations:String):String
        deleteAvance(proyecto1:String): String
        deleteObservation(observation1:String): String
        insertUserToProyecto(identification:String,name:String):String
        updatePhaseProyectos(name: String, phase: String): String
        updateProyecto(_id: ID, name: String, generalObjective: String, specificObjectives: String, budget: Float): String
        autenticar(usuario:String, clave:String): String
>>>>>>> 3873c338583390954f88f5552b7abab41eea9551
    }
    
`


module.exports = typeDefs