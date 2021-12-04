const ProyectoModel = require('./model/proyectoModel')
const UsuarioModel = require('./model/usuariosModel')
const InscripcionesModel = require('./model/inscripcionesModel');
const inscripcionesModel = require('./model/inscripcionesModel');

const resolvers = {
    Query: {
        proyectos: async () => await ProyectoModel.find({}),
        getProyecto: async (parent, args, context, info) => await ProyectoModel.findOne({ name: args.name }),
        usuarios: async () => await UsuarioModel.find({}),
        getUsuario: async (parent, args, context, info) => await UsuarioModel.findOne({ identification: args.identification }),
        inscripciones: async () => await InscripcionesModel.find({}),
        getInscripcion: async (parent, args, context, info) => await InscripcionesModel.findOne({ _id: args._id })
    },
    Mutation: {
        //crear proyecto nuevo
        createProyecto: (parent, args, context, info) => {
            const { name, generalObjective, specificObjectives, budget, startDate, endDate } = args.Proyecto;
            const nuevoProyecto = new ProyectoModel();
            nuevoProyecto.name = name;
            nuevoProyecto.generalObjective = generalObjective;
            nuevoProyecto.specificObjectives = specificObjectives;
            nuevoProyecto.budget = budget;
            if (startDate) { nuevoProyecto.startDate = startDate; } else { nuevoProyecto.startDate = new Date(); }
            nuevoProyecto.endDate = endDate;
            return nuevoProyecto.save().then(u => "Proyecto creado")
                .catch(err => console.log("Fallo la Creación"));
            //.catch(err => console.log("err")) si quierover cual es el error
        },
        //actualizar un campo de proyectos
        activeProyecto: (parent, args, context, info) => {
            return ProyectoModel.updateOne({ name: args.name }, { status: "ACTIVE" })
                .then(u => "Proyecto Actualizado")
                .catch(err => console.log("Fallo la Activación"));
        },
        //borrar un proyecto
        deleteProyecto: (parent, args, context, info) => {
            return ProyectoModel.deleteOne({ name: args.name1 })
                .then(u => "Proyecto Eliminado")
                .catch(err => console.log("Fallo La Eliminación"));
        },
        // Crear usuario
        createUsuario: (parent, args, context, info) => {
            const { fullName, identification, email, password, role, status } = args.Usuario;
            const nuevoUsuario = new UsuarioModel();
            nuevoUsuario.fullName = fullName;
            nuevoUsuario.identification = identification;
            nuevoUsuario.email = email;
            nuevoUsuario.password = password;
            nuevoUsuario.role = role;
            nuevoUsuario.status = status;
            return nuevoUsuario.save()
                .then(mensaje => "Usuario creado")
                .catch(err => console.log("Falló la creación"));
        },
        // Actualizar status usuario
        updateStatusUsuario: (parent, args, context, info) => {
            return UsuarioModel.updateOne({ identification: args.identification }, { status: args.status })
                .then(u => "Status de usuario actualizado")
                .catch(err => console.log("Falló la actualización"));
        },
        updateUsuario: (parent, args, context, info) => {
            return UsuarioModel.updateOne({ _id: args._id },
                {
                    fullName: args.fullName,
                    identification: args.identification,
                    email: args.email,
                    password: args.password,
                    role: args.role,
                    status: args.status
                })
                .then(u => "Usuario actualizado")
                .catch(err => console.log(err));
        },
        //crear inscripcion

        createInscripcion:async (parent, args, context, info) => {
            const { project_id, user_id, status, enrollmentDate, egressDate } = args.Inscripcion;
            const nuevoIncripcion = new InscripcionesModel();
            const proyect =  await ProyectoModel.findOne({ name: project_id });
            const user =  await UsuarioModel.findOne({ email: user_id });
            nuevoIncripcion.project_id =proyect._id;
            nuevoIncripcion.user_id = user._id;
            nuevoIncripcion.status = status;
            nuevoIncripcion.enrollmentDate = enrollmentDate;
            nuevoIncripcion.egressDate = egressDate;
            
           // if (enrollmentDate) { nuevoIncripcion.enrollmentDate = enrollmentDate; } else { nuevoIncripcion.enrollmentDate = new Date(); }
            // nuevoIncripcion.egressDate = egressDate;
            return nuevoIncripcion.save().then(u => "Incripcion creada")
                .catch(err => console.log("Fallo la Inscripcion"));
            //.catch(err => console.log("err")) si quierover cual es el error
        },
        ///////////

        // Actualizar status de incripcion
        updateStatusInscripcion: (parent, args, context, info) => {
            return inscripcionesModel.updateOne({ _id: args._id }, { status: args.status })
                .then(u => "Status de usuario actualizado")
                .catch(err => console.log("Falló la actualización"));
        },
        deleteInscripcion: (parent, args, context, info) => {
            return inscripcionesModel.deleteOne({ _id: args._id })
                .then(u => "Inscripcion Eliminado")
                .catch(err => console.log("Fallo La Eliminación"));
        }
    }
}
module.exports = resolvers