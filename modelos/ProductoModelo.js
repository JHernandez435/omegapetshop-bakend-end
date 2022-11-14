const mongoose = require ("mongoose");

const ProductoSchema = new mongoose.Schema({
    nombre: { type:String, maxLength:60, required:true },
    enfoque: { type: String, maxlength: 100, required: true },
    cantKilos: { type: String, maxlength: 100, required: true },
    marca: { type:String, maxLength:60, required:true },
    precio: { type:Number, required:true },
    especies: [{ type:String, maxLength:30, required:true }],
    categorias: [{ type:String, maxLength:30, required:true }],
    imagen: { type:String, maxLength:30, required:true, unique: true },
    disp: { type:Boolean, default:true }
});

module.exports = mongoose.model("productos", ProductoSchema);