var usuaris = {
    noms : ["joan garcia", "jaume pontons", "ana riu", "marta aran", "alex fornell", "mariona cots"]
 };

function afegirMetode(objecte, nom, funcio){
	var old = objecte[nom];
	objecte[nom] = function(){
				if(funcio.length == arguments.length)	
					return funcio.apply(this, arguments);
				else if (typeof old == 'function')
					return old.apply(this, arguments);
		};
}


afegirMetode(usuaris, "Parametros0", function(){ return this.noms});
afegirMetode(usuaris, "Parametros1", function(nombre){ 
    var nom;
    for (let i = 0; i < this.noms.length; i++) {
        if(nombre == this.noms[i]){
            nom = this.noms[i];
        }else{
            nom = "No se ha encontrado el nombre";
        }
    }
    return nom;
 });
afegirMetode(usuaris, "Parametros2", function(nombre, apellido){ });

alert(this.usuaris.Parametros1("joan"));