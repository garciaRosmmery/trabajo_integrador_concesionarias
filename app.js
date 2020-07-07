//-- requiero el módulo Express y almaceno la ejecución de la función express() --
const express = require('express');
const app = express();

//-- Rutas --
const routeHome = require('./routes/home');
const routeAutos = require('./routes/autos');
const routeMarcas = require('./routes/marcas');
const routeSucursales = require('./routes/sucursales');

//-- servidor escuchando en el puerto 3030 --
app.listen(3020, () => console.log("Servidor Corriendo"));

app.use('/', routeHome);
app.use('/autos', routeAutos);
app.use('/marcas', routeMarcas);
app.use('/sucursales', routeSucursales);