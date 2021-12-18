const mongoose = require('mongoose')
require('dotenv').config();

const urlDB=process.env.Conection;
mongoose.connect(urlDB);

const mongoDB = mongoose.connection;
mongoDB.on('open', _ =>{
    console.log("conectado a la bd");
});