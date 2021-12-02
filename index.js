require('./infraestructura/conectionDB')
const typeDefs = require('./typeDef')
const resolvers = require('./resolver')
//mm
const express = require('express')

/*
const proyectoAguas =new ProyectoModel({
    name:'Proyecto de aguas residuales'
})
proyectoAguas.save((err,document)=>{
    if(err){
        console.log(err);
        return;
    }
});

const consultaProyectos = async ()=>{
    return await ProyectoModel.find({});
}


api.get('/proyectos',(request,response)=>{
    consultaProyectos().then(function(resultado){
        response.json({ proyectos1 :resultado});
    })
});*/

const {ApolloServer} = require('apollo-server-express')

const iniciarServidor =async()=>{
    const api = express();
    const apollo= new ApolloServer(
        {
            typeDefs,
            resolvers
        });
    await apollo.start()
    apollo.applyMiddleware({app:api,path:'/consulta'})
    api.use((request, response)=>{
        response.send('Hola')
    })
    api.listen('9091',()=>console.log('Inicio Server'))
}
iniciarServidor()