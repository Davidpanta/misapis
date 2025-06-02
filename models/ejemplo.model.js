import mongoose from 'mongoose';

const ejemploShema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    edad:{
        type: Number,
        required: false
    },
    contacto:{
        type: {String},
        required: false
    },
});

const Ejemplo = mongoose.model('Ejemplo', ejemploShema);

export default Ejemplo;