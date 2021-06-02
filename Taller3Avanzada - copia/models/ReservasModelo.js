const {model, Schema}=require('mongoose');

const ReservaEsquema=Schema({
    nombre:{
        type:String,
        required:true
    },
   apellido:{
        type:String,
        required:true
    },
    telefono:{
        type:Number,
        required:true
    },
    fechaInicialReserva:{
        type:String,
        required:true
    },
    fechaFinalReserva:{
        type:String,
        required:true
    },
    numeroPersonas:{
        type:Number,
        required:true
    },
    tipoPaquete:{
        type:String,
        required:true
    },

});

module.exports=model('Reserva',ReservaEsquema);