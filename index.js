require('./infraestructura/conectionDB')
const ProyectoModel =require('./model/proyectoModel')
const express = require('express')

const api = express();

const proyectoAguas =new ProyectoModel({
    name:'Proyecto de aguas residuales'
})
/*proyectoAguas.save((err,document)=>{
    if(err){
        console.log(err);
        return;
    }
});*/

const consultaProyectos = async ()=>{
    return await ProyectoModel.find({});
}


api.get('/proyectos',(request,response)=>{
    consultaProyectos().then(function(resultado){
        response.json({ proyectos1 :resultado});
    })
});
api.listen('9091');