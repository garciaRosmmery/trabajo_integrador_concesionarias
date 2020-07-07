const fs = require('fs');
let concesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

const sucursales = {
    index:function(req,res){
        
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write("\n*******************************************\n\tNUESTRAS SUCURSALES\n*******************************************\n\n");

        concesionarias.forEach(function(sucursal) {
            res.write('\t' + sucursal.sucursal + '\n');
            res.write('\t-----------------------------------------------------------------------------------------\n');
            res.write('\tDirección: ' + sucursal.direccion + '\n');
            res.write('\tTeléfono: ' + sucursal.telefono + '\n');
            res.write('\t-----------------------------------------------------------------------------------------\n\n');
        });

        res.end();
    },
    detalle_sucursal:function(req,res){
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write("\n************************************************\n\tCONCESIONARIA DIGITAL HOUSE - FORMAR\n************************************************\n\n");

        concesionarias.forEach(function(sucursal){
            if(sucursal.sucursal == req.params.sucursal){
                res.write('\t' + sucursal.sucursal + '\n');
                res.write('\t-----------------------------------------------------------------------------------------\n');
                res.write('\tDirección: ' + sucursal.direccion + '\n');
                res.write('\tTeléfono: ' + sucursal.telefono + '\n');
                res.write('\t-----------------------------------------------------------------------------------------\n\n');

                res.write("\n***************************************\n\tVEHÍCULOS\n***************************************\n\n");

                sucursal.autos.forEach(function(auto){
                    res.write("-> " + auto.marca + ", " + auto.modelo + ", " + auto.anio + '\n');
                });


                res.write('\n---------------------------\n');
                res.write('TOTAL: ' + sucursal.autos.length);
                res.write('\n---------------------------\n');
                res.end();
        
            }

        });
        res.end("Lo siento, por el momento no disponemos de sucursales en " + req.params.sucursal);
    }
}

module.exports = sucursales;