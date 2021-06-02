const { request,response }=require('express');

const ReservaModelo=require('../models/ReservasModelo.js');

async function buscarReserva(peticion=request,respuesta=response){

    let datosconsultados=await ReservaModelo.find();

    respuesta.json({
        estado:true,
        mensaje:datosconsultados
    });
  
}

async function agregarReserva(peticion=request,respuesta=response){

    let datosPeticion=peticion.body;

    let reserva=new ReservaModelo(datosPeticion);
    await reserva.save();
    
    respuesta.json({
        estado:true,
        mensaje:'Reserva agregada con exito',
        datos:reserva
    });

}

async function editarReserva(peticion=request,respuesta=response){

    let id=peticion.params.id;
    let datosPeticion=peticion.body;

    await ReservaModelo.findByIdAndUpdate(id,datosPeticion);


    respuesta.json({
        estado:true,
        mensaje:'Reserva actualizada con exito'
    });

}

async function eliminarReserva(peticion=request,respuesta=response){

    let id=peticion.params.id;
    await ReservaModelo.findByIdAndDelete(id);

    respuesta.json({
        estado:true,
        mensaje:'Reserva eliminada con exito'
    });

}

module.exports={
    buscarReserva,
    agregarReserva,
    editarReserva,
    eliminarReserva
}