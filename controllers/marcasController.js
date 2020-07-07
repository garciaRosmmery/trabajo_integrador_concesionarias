const fs = require('fs');
let sucursales = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

const marcas = {
    index:function(req,res){
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write("\n********************************************************\n\tCONCESIONARIAS DIGITAL HOUSE - FORMAR\n********************************************************\n\n");
        res.write("*****   Nuestras Marcas  *****\n\n");

        let todas_las_marcas = marcas.filtrar_marcas();

        todas_las_marcas.forEach(function(marca){
            res.write(marca + '\n');
        })
        
        res.end();

    },
    guardar_marcas: function(){

        let marcas = [];

        sucursales.forEach(function(sucursal){
            sucursal.autos.forEach(function(auto){
                marcas.push(auto.marca);
            });
        });

        return(marcas);
    },
    filtrar_marcas:function(){

        //Almaceno en un variable todas marcas de todas las sucursales(incluyendo repetidas)
        let todas_las_marcas = marcas.guardar_marcas();
        //Filtro marcas, eliminando todas las que se repiten
        let marcas_filtradas = [];//Variable en la que iré guardando marcas que no se repitan

        todas_las_marcas.forEach(function(marca){

            if(marcas_filtradas.indexOf(marca) < 0){

                marcas_filtradas.push(marca);
            } 
        });

        return(marcas_filtradas);
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
    autos_por_marca:function(req,res){

        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write("\n*******************************************************\n\tCONCESIONARIAS DIGITAL HOUSE - FORMAR\n*******************************************************\n\n");
    
        let autos = marcas.guardar_autos();
        let cant_autos = 0;
        autos.forEach(function(auto){
            if(auto.marca == req.params.marca){
                res.write("-> " + auto.marca + ", " + auto.modelo + ", " + auto.anio + '\n');
                cant_autos++;
            }
        });

        res.write('\n---------------\n');
        res.write('TOTAL: ' + cant_autos);
        res.write('\n---------------\n');
        res.end();
    }
}
module.exports = marcas;
