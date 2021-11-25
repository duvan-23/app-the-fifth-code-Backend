const ProyectoModel =require('./model/proyectoModel')

const listProyectos=[
    {
        name:'Proyecto 1',
        generalObjective: 'crear un puente',
        budget:3000000000
    },
    {
        name:'Proyecto 2',
        generalObjective: 'crear una casa',
        budget:2700000000
    },
    {
        name:'Proyecto 3',
        generalObjective: 'crear un edificio',
        budget:13000000000
    }
]
const resolvers ={
    Query:{
        // proyectos:()=>listProyectos,
        // proyecto: (parent,args, context, info)=>{
        //     return listProyectos.find(pro=> pro.name ==args.name)
        // }
        proyectos:async ()=> await ProyectoModel.find({})
    }
}
module.exports= resolvers