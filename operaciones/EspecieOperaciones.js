const EspecieModelo = require("../modelos/EspecieModelo");
const EspecieOperaciones = {};

EspecieOperaciones.getEspecies = async(req, res) => {
    try {
        const filtro = req.query;
        const especies = await EspecieModelo.find(filtro);
        res.status(200).send(especies);
    } catch (error) {
        res.status(400).json(error);
    }
}

EspecieOperaciones.getEspecie = async(req, res) => {
    try {
        const id = req.params.id;
        const especie = await EspecieModelo.findById(id);
        if (especie == null) {
            res.status(404).send("No se encontraron datos");
        }
        else {
            res.status(200).send(especie);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

EspecieOperaciones.guardarEspecie = async(req, res) => {
    try {
        const body = req.body;
        const especie = new EspecieModelo(body);
        const especieGuardada = await especie.save();
        res.status(201).send(especieGuardada);
    } catch (error) {
        res.status(400).json(error);
    }
}

EspecieOperaciones.modificarEspecie = async(req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const datos = {
            nombre: body.nombre,
            imagen: body.imagen,
            hab: body.hab
        }
        const especieModificada = await EspecieModelo.findByIdAndUpdate(id, datos, {new: true});
        console.log(especieModificada);
        if (especieModificada!= null) {
            res.status(200).send(especieModificada);
        }
        else {
            res.status(404).send("No se encontraron datos");
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

EspecieOperaciones.borrarEspecie = async(req, res) => {
    try {
        const id = req.params.id;
        const especieBorrada = await EspecieModelo.findByIdAndDelete(id);
        if (especieBorrada == null) {
            res.status(404).send("No se encontraron datos");
        }
        else {
            res.status(200).send(especieBorrada);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = EspecieOperaciones;
