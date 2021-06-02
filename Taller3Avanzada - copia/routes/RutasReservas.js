const{ Router } =require('express');

const {buscarReserva }= require ('../controllers/controladorReserva.js')
const {editarReserva }= require ('../controllers/controladorReserva.js')
const {agregarReserva }= require ('../controllers/controladorReserva.js')
const {eliminarReserva }= require ('../controllers/controladorReserva.js')

const { validarPeticion }=require('../validator/validaciones.js');

const {check}=require('express-validator');

let validaciones=Array(

    check('nombre',"campo requerido").not().isEmpty(),
    check('apellido',"campo requerido").not().isEmpty(),
    check('telefono',"campo requerido").not().isEmpty(),
    check('fechaInicialReserva',"campo requerido").not().isEmpty(),
    check('fechaFinalReserva',"campo requerido").not().isEmpty(),
    check('numeroPersonas',"campo requerido").not().isEmpty(),
    check('tipoPaquete',"campo requerido").not().isEmpty(),
    validarPeticion
    
);


const rutas=Router();

rutas.get('/reservas/:id',buscarReserva);
rutas.post('/reserva/nuevo',validaciones,agregarReserva);
rutas.put('/reserva/editar/:id',editarReserva);
rutas.delete('/reserva/eliminar/:id',eliminarReserva);

module.exports=rutas;