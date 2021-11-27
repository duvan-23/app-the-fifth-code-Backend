const ProyectoModel =require('./model/proyectoModel')


const resolvers ={
    Query:{       
        proyectos:async ()=> await ProyectoModel.find({}),
        getProyecto: async(parent,args, context, info) => await ProyectoModel.findOne({name:args.name})
    },
    Mutation:{
        //crear proyecto nuevo
        createProyecto:(parent,args, context, info)=>{
            const {name,generalObjective,specificObjectives,budget,startDate,endDate}=args.Proyecto;
            const nuevoProyecto = new ProyectoModel();
            nuevoProyecto.name=name;
            nuevoProyecto.generalObjective=generalObjective;
            nuevoProyecto.specificObjectives=specificObjectives;
            nuevoProyecto.budget=budget;
            if(startDate){nuevoProyecto.startDate=startDate;}else{nuevoProyecto.startDate=new Date();}
            nuevoProyecto.endDate=endDate;
            return nuevoProyecto.save().then(u => "Proyecto creado")
            .catch(err => console.log("Fallo la Creación"));
            //.catch(err => console.log("err")) si quierover cual es el error
        },
        //actualizar un campo de proyectos
        activeProyecto:(parent,args, context, info)=>{
            return ProyectoModel.updateOne({name:args.name},{status:"ACTIVE"})
            .then(u => "Proyecto Actualizado")
            .catch(err => console.log("Fallo la Activación"));
        },
        //borrar un proyecto
        deleteProyecto:(parent,args, context, info)=>{
            return ProyectoModel.deleteOne({name:args.name1})
            .then(u => "Proyecto Eliminado")
            .catch(err => console.log("Fallo La Eliminación"));
        }
        
    }
}
module.exports= resolvers