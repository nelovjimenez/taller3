const ServidorModelo=require('./models/ServidorModelo.js');

require('dotenv').config()

let servidor= new ServidorModelo();

servidor.despertarServidor();




