const mongoose = require ("mongoose");

const ClienteSchema = new mongoose.Schema({
    documento: { type:String, maxLength:15, required:true, unique: true },
    nombres: { type:String, maxLength:80, required:true },
    apellidos: { type:String, maxLength:80, required:true },
    direccion: { type:String, maxLength:100, required:true },
    telefono: { type:String, maxLength:10, required:true },
    email: { type:String, maxLength:100, required:true, unique: true },
    passw: { type:String, required:true },
    es_admin: { type:Boolean, required:true }
});

module.exports = mongoose.model("clientes", ClienteSchema);