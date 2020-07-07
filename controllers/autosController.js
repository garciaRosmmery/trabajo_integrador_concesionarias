const fs = require('fs');
let sucursales = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));
const autos = {
    index:function(req,res){
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write("\n****************************************************\n\tCONCESIONARIAS DIGITAL HOUSE - FORMAR\n****************************************************\n\n");
        let todos_los_autos = autos.guardar_autos();
        todos_los_autos.forEach(function(auto){
            res.write("-> " + auto.marca + ", " + auto.modelo + ", " + auto.anio + ", " + auto.color + '\n');
        })

        res.write('\n---------------------------\n');
        res.write('TOTAL: ' + todos_los_autos.length);
        res.write('\n---------------------------\n');
        res.end();


    },
    guardar_autos:function(){
        let autos = [];

        sucursales.forEach(function(sucursal){
            sucursal.autos.forEach(function(auto){
                autos.push(auto);
            });
        });

        return(autos);
    },
    filtrar_por_marca:function(req, res){

        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write("\n****************************************************\n\tCONCESIONARIAS DIGITAL HOUSE - FORMAR\n****************************************************\n\n");

        let cant_autos = 0;
        sucursales.forEach(function(sucursal){

            sucursal.autos.forEach(function(auto){

                if(auto.marca == req.params.marca){

                    res.write("Marca: " + auto.marca + " - Modelo: " + auto.modelo + " - Año: " + auto.anio + " - Color: " + auto.color + " - Sucursal: " + sucursal.sucursal + '\n');
                    cant_autos++;

                }
            
            });


        });

        if (cant_autos > 0){
            res.write('\n---------------------------\n');
            res.write('TOTAL: ' + cant_autos);
            res.write('\n---------------------------\n');
            
    
        }else {

            res.write("Lo sentimos, por el momento no disponemos ningun modelo " + req.params.marca);
            
        }
        res.end();
    
    },
    filtrar_por_dato:function(req,res){

        let todos_los_autos = autos.guardar_autos();
        let cant_autos = 0;

        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write("\n****************************************************\n\tCONCESIONARIAS DIGITAL HOUSE - FORMAR\n****************************************************\n\n");

        sucursales.forEach(function(sucursal){

            sucursal.autos.forEach(function(auto){

                if(auto.marca == req.params.marca){
                    
                    if(auto.anio == req.params.dato){

                        res.write("Marca: " + auto.marca + " - Modelo: " + auto.modelo + " - Año: " + auto.anio + " - Color: " + auto.color + " - Sucursal: " + sucursal.sucursal + '\n');
                        cant_autos++;

                    }else {

                        if(auto.color == req.params.dato){

                            res.write("Marca: " + auto.marca + " - Modelo: " + auto.modelo + " - Año: " + auto.anio + " - Color: " + auto.color + " - Sucursal: " + sucursal.sucursal + '\n');
                            cant_autos++;

                        }
                    }      
                }
            }); 
        });

        if (cant_autos > 0){
            res.write('\n---------------------------\n');
            res.write('TOTAL: ' + cant_autos);
            res.write('\n---------------------------\n');
            
    
        }else {

            res.write("Lo sentimos, NO SE ENCONTRO " + req.params.marca + " " + req.params.dato);
            
        }
        res.end();
    }
}

module.exports = autos;