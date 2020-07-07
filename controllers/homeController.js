const fs = require('fs');
let sucursales = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

const home = {
    index:function(req,res){
        
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write("\n************************************************\n\tBIENVENIDOS A CONCESIONARIAS DH\n************************************************\n\n");
        res.write("*****   Nuestras Sucursales  *****\n\n");

        sucursales.forEach(function(sucursal) {
            res.write('\t-> ' + sucursal.sucursal + '\n');
        });

        res.end();
    }
}

module.exports = home;