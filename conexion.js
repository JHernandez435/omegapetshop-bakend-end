const mongoose = require('mongoose');
const database = "Omegapetshop";
const username = "admin";
// const user = "admin";
const password = "admin";
const URL = "mongodb+srv://"+username+":"+password+"@cluster0.2ima9ur.mongodb.net/"+database+"?retryWrites=true&w=majority";
// const URL = 'mongodb+srv://'+user+':'+password+'@cluster0.pu6x2hd.mongodb.net/'+database+'?retryWrites=true&w=majority';

const conectar = async () => {
	try {
		await mongoose.connect(URL);
		console.log("Atlas en linea");
	} catch (error) {
		console.log("Error en la conexión a Atlas. "+error);
	}
}
conectar();

module.exports = mongoose;
