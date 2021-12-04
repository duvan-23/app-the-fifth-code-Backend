const { Decimal128 } = require('bson')
const {Schema, model}=require('mongoose')

const inscripciones=new Schema({
    project_id: {
        type: Schema.ObjectId,
        unique:true,
        required: true,
      },
      user_id: {
        type: Schema.ObjectId,
        unique:true,
        required: true,
      },
      status: {
        type: String,
        enum: ['acepted', 'rejected'],
        default:"INACTIVE",
        required: true,
      },
      enrollmentDate: {
        type: Date,
        required: true,
      },
      egressDate: {
        type: Date,
        required: true,
      }
    
})
module.exports = model('inscripciones',inscripciones,"inscripciones")
