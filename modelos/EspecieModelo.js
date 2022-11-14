const mongoose = require("mongoose");

const EspecieSchema = new mongoose.Schema({
    nombre: { type:String, maxLength:30, required:true, unique:true },
    imagen: { type:String, maxLength:30, required:true, unique:true },
    hab: { type: Boolean, required: true }
});

module.exports =  mongoose.model("especies", EspecieSchema);