const { Decimal128 } = require('bson')
const {Schema, model}=require('mongoose')

const proyectos=new Schema({
    name: {
        type:String,
        required: true
    },
    startDate:{
        type:Date,
        default: new Date()
    }
})
module.exports = model('proyectos1',proyectos)
